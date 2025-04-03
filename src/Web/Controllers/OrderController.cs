using Application.Mediator.Orders.Commands;
using Application.Mediator.Orders.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("get-all-orders")]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await _mediator.Send(new GetAllOrdersQuery());
            return Ok(orders);
        }

        [HttpPost("create-order")]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderCommand command)
        {
            var order = await _mediator.Send(command);
            return Ok(order);
        }

        [HttpPut("update-order-status/{orderId}")]
        public async Task<IActionResult> UpdateOrderStatus(int orderId, [FromBody] UpdateOrderStatusCommand command)
        {
            if ( orderId != command.OrderId )
            {
                return BadRequest(new { message = "Id не співпадає" });
            }

            var result = await _mediator.Send(command);
            return result ? Ok(new { message = "Статус оновлено" }) : NotFound(new { message = "Замовлення не знайдено" });
        }
    }
}
