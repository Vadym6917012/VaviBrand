using Application.Common.Interfaces;
using Application.DTOs;
using Application.Mediator.Categories.Commands;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mediator.Categories.CommandHandler
{
    public class UpdateCategoryCommandHandler : IRequestHandler<UpdateCategoryCommand, CategoryDto>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateCategoryCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<CategoryDto> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _unitOfWork.Repository<Category>().GetByIdAsync(request.Id);
            if (category == null )
            {
                return null;
            }

            _mapper.Map(request, category);
            _unitOfWork.Repository<Category>().Update(category);
            await _unitOfWork.SaveChangesAsync();
            
            return _mapper.Map<CategoryDto>(category);
        }
    }
}
