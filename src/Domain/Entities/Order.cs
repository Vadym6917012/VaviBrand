namespace Domain.Entities
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

        [Required, MaxLength(20)]
        public string Status { get; set; } = "Обробка";

        public ICollection<OrderItem> OrderItems { get; set; }

        public Payment Payment { get; set; }
        public ShippingDetail ShippingDetail { get; set; }
    }
}
