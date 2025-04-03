namespace Domain.Entities
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required, MaxLength(50)]
        public string Name { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
