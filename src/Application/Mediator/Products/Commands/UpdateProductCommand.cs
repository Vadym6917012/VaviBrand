namespace Application.Mediator.Products.Commands
{
    public class UpdateProductCommand : IRequest<ProductDto>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public int StockQuantity { get; set; }
        public int CategoryId { get; set; }
    }
}
