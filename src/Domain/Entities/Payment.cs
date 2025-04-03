namespace Domain.Entities
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public Guid OrderId { get; set; }
        public Order Order { get; set; }

        [Required, MaxLength(50)]
        public string PaymentMethod { get; set; }

        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;

        public bool IsSuccessful { get; set; } = false;
    }
}
