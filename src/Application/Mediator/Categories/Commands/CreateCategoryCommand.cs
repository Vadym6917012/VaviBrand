using Application.DTOs;
using MediatR;

namespace Application.Mediator.Categories.Commands
{
    public class CreateCategoryCommand : IRequest<CategoryDto>
    {
        public string Name { get; set; }
    }
}
