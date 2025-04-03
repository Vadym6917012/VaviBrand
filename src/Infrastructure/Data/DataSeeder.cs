using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public static class DataSeeder
    {
        public static async Task SeedDataAsync(DataContext context)
        {
            if ( (await context.Database.GetPendingMigrationsAsync()).Any() )
            {
                await context.Database.MigrateAsync();
            }

            SeedCategories(context);
        }

        private static void SeedCategories(DataContext context)
        {
            if ( !context.Categories.Any() )
            {

                context.Categories.AddRange(
                    new Category
                    {
                        Name = "Спортивні костюми"
                    }, new Category
                    {
                        Name = "Боді"
                    }, new Category
                    {
                        Name = "Майки"
                    });
                context.SaveChanges();
            }
        }
    }
}




