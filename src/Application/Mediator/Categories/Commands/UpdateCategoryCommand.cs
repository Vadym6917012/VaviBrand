using Application.DTOs;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mediator.Categories.Commands
{
    public class UpdateCategoryCommand : IRequest<CategoryDto>
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
