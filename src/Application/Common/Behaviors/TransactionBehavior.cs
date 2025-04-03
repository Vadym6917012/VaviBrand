using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Behaviors
{
    public class TransactionBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly DbContext _dbContext;

        public TransactionBehavior(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _dbContext = _unitOfWork.GetDbContext();
        }

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            TResponse response;

            if ( _dbContext == null )
            {
                return await next();
            }


            using ( var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken) )
            {
                try
                {
                    response = await next();
                    await _unitOfWork.SaveChangesAsync();
                    await transaction.CommitAsync(cancellationToken);
                }
                catch ( Exception )
                {
                    await transaction.RollbackAsync(cancellationToken);
                    throw;
                }
            }

            return response;
        }
    }
}
