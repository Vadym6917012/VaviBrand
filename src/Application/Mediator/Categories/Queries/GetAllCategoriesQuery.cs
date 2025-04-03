namespace Application.Mediator.Categories.Queries
{
    public class GetAllCategoriesQuery : IRequest<IEnumerable<CategoryDto>>
    {
        public string Name { get; set; }
    }
}
