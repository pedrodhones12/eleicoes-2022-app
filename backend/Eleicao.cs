using Microsoft.EntityFrameworkCore;
using EleicoesAPI.Models;

namespace EleicoesAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
        public DbSet<Eleicao> Eleicoes { get; set; }
    }
}