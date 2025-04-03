using Application.Mediator.Categories.Commands;
using Application.Mediator.Categories.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CategoryController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("get-all-categories")]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await _mediator.Send(new GetAllCategoriesQuery());
            return Ok(categories);
        }

        [HttpPost("create-category")]
        public async Task<IActionResult> CreateCategory([FromBody] CreateCategoryCommand command)
        {
            var categoryId = await _mediator.Send(command);
            return Ok(categoryId);
        }

        [HttpDelete("delete-category/{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var result = await _mediator.Send(new DeleteCategoryCommand { Id = id });
            if (!result )
            {
                return NotFound(new { message = "Категорія не знайдена" });
            }
            return Ok(new { message = "Категорія видалена успішно" });
        }

        [HttpPut("update-category/{id}")]
        public async Task<IActionResult> UpdateCategory(int id, [FromBody] UpdateCategoryCommand command)
        {
            if ( id != command.Id )
            {
                return BadRequest(new { message = "Id не співпадає" });
            }
            var updatedCategory = await _mediator.Send(command);
            if ( updatedCategory == null )
            {
                return NotFound(new { message = "Категорія не знайдена" });
            }
            return Ok(updatedCategory);
        }
    }
}
