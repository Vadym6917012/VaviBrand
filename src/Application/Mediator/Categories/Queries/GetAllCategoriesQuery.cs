using Application.DTOs;
using Domain.Entities;
using MediatR;

namespace Application.Mediator.Categories.Queries
{
    public class GetAllCategoriesQuery : IRequest<IEnumerable<CategoryDto>>
    {
        public string Name { get; set; }
    }
}
