using Microsoft.EntityFrameworkCore;

namespace Application.Common.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<T> Repository<T>() where T : class;
        Task<int> SaveChangesAsync();
        DbContext GetDbContext();
    }
}
