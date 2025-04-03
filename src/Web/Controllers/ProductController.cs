using Application.Mediator.Products.Commands;
using Application.Mediator.Products.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProductController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("get-product/{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await _mediator.Send(new GetProductQuery { Id = id });
            if ( product == null )
            {
                return NotFound(new { message = "Товар не знайдено" });
            }
            return Ok(product);
        }

        [HttpGet("get-all-products")]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _mediator.Send(new GetAllProductsQuery());
            return Ok(products);
        }

        [HttpPost("create-product")]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductCommand command)
        {
            var productId = await _mediator.Send(command);
            return Ok(productId);
        }

        [HttpDelete("delete-product/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var result = await _mediator.Send(new DeleteProductCommand { Id = id });
            if ( !result )
            {
                return NotFound(new { message = "Товар не знайдено" });
            }
            return Ok(new { message = "Товар видалено успішно" });
        }

        [HttpPut("update-product/{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] UpdateProductCommand command)
        {
            if ( id != command.Id )
            {
                return BadRequest(new { message = "Id не співпадає" });
            }
            var updatedProduct = await _mediator.Send(command);
            if ( updatedProduct == null )
            {
                return NotFound(new { message = "Товар не знайдено" });
            }
            return Ok(updatedProduct);
        }
    }
}
