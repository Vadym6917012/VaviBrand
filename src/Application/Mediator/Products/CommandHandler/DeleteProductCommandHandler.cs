using Application.Mediator.Products.Commands;

namespace Application.Mediator.Products.CommandHandler
{
    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, bool>
    {
        private readonly IUnitOfWork _unitOfWork;
        public DeleteProductCommandHandler(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<bool> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _unitOfWork.Repository<Product>().GetByIdAsync(request.Id);
            if ( product == null )
            {
                return false;
            }

            await _unitOfWork.Repository<Product>().DeleteAsync(product.Id);
            await _unitOfWork.SaveChangesAsync();
            return true;
        }
    }
}
