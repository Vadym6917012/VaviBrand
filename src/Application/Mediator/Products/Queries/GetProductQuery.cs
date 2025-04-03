namespace Application.Mediator.Products.Queries
{
    public class GetProductQuery : IRequest<ProductDto>
    {
        public int Id { get; set; }
    }
}
