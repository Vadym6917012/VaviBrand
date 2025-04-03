using Application.Common.Interfaces;
using Application.DTOs;
using Application.Mediator.Categories.Queries;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Mediator.Categories.QueryHandler
{
    public class GetAllCategoriesQueryHandler : IRequestHandler<GetAllCategoriesQuery, IEnumerable<CategoryDto>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public GetAllCategoriesQueryHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public async Task<IEnumerable<CategoryDto>> Handle(GetAllCategoriesQuery request, CancellationToken cancellationToken)
        {
            var categories = await _unitOfWork.Repository<Category>().GetAllAsync();
            return _mapper.Map<IEnumerable<CategoryDto>>(categories);
        }
    }
}
