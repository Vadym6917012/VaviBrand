namespace Application.Mediator.Categories.Queries
{
    public class GetCategoryQuery : IRequest<CategoryDto>
    {
        public int Id { get; set; }
    }
}
