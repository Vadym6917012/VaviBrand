using Application.Common.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace Infrastructure.Services
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _context;
        private Hashtable _repositories;

        public UnitOfWork(DataContext context)
        {
            _context = context;
            _repositories = new Hashtable();
        }

        public IGenericRepository<T> Repository<T>() where T : class
        {
            var type = typeof(T).Name;
            if ( !_repositories.ContainsKey(type) )
            {
                var repositoryInstance = Activator.CreateInstance(typeof(GenericRepository<>).MakeGenericType(typeof(T)), _context);
                _repositories.Add(type, repositoryInstance);
            }
            return (IGenericRepository<T>)_repositories [type];
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public DbContext GetDbContext()
        {
            return _context;
        }

        public void Dispose()
        {
            _context.Dispose();
            _repositories.Clear();
        }
    }
}
