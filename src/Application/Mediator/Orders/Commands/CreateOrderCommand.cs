namespace Application.Mediator.Orders.Commands
{
    public class CreateOrderCommand : IRequest<OrderDto>
    {
        public string UserId { get; set; }
        public List<OrderItemDto> OrderItems { get; set; }
        public PaymentDto Payment { get; set; }
        public ShippingDetailDto ShippingDetail { get; set; }
    }
}
