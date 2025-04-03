namespace Application.Mediator.Orders.Commands
{
    public class UpdateOrderStatusCommand : IRequest<bool>
    {
        public int OrderId { get; set; }
        public string Status { get; set; }
    }
}
