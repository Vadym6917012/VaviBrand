using Application;
using Infrastructure;
using Infrastructure.Data;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddInfrastructureServices(builder.Configuration);

builder.Services.AddApplicationServices();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "VaviBrand API",
        Version = "v1",
        Description = "API for VAVI_BRAND web application"
    });
    options.CustomSchemaIds(type => type.FullName);
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        policy => policy.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if ( app.Environment.IsDevelopment() )
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

#region Context Seed

using ( var scope = app.Services.CreateScope() )
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<DataContext>();
        await DataSeeder.SeedDataAsync(context);
    }
    catch ( Exception ex )
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex.Message, "Не вдалося ініціалізувати та заповнити базу даних");
    }
}

#endregion

app.Run();
