using Application.Mediator.Categories.Commands;
using Application.Mediator.Categories.Queries;
using AutoMapper;

namespace Application.Common.Mappings
{
    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<Category, CategoryDto>().ReverseMap();
            CreateMap<Category, CreateCategoryCommand>().ReverseMap();
            CreateMap<Category, UpdateCategoryCommand>().ReverseMap();
            CreateMap<Category, GetCategoryQuery>().ReverseMap();
        }
    }
}
