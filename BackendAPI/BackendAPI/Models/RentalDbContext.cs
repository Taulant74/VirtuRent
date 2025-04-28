using Microsoft.EntityFrameworkCore;
namespace BackendAPI.Models
{
    public class RentalDbContext : DbContext
    {
        public RentalDbContext(DbContextOptions<RentalDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Category> Categories => Set<Category>();
        public DbSet<Listing> Listings => Set<Listing>();
        public DbSet<Rental> Rentals => Set<Rental>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // You can configure keys, foreign keys, constraints manually here
        }
    }

}
