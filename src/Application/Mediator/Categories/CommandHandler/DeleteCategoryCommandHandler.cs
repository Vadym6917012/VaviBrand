using Application.Common.Interfaces;
using Application.Mediator.Categories.Commands;
using Domain.Entities;
using MediatR;

namespace Application.Mediator.Categories.CommandHandler
{
    public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCategoryCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeleteCategoryCommandHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<bool> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _unitOfWork.Repository<Category>().GetByIdAsync(request.Id);
            if ( category == null )
            {
                return false;
            }

            await _unitOfWork.Repository<Category>().DeleteAsync(request.Id);
            await _unitOfWork.SaveChangesAsync();
            return true;
        }
    }
}
