namespace Application.DTOs
{
    public class PaymentDto
    {
        public int Id { get; set; }
        public string PaymentMethod { get; set; }
        public DateTime PaymentDate { get; set; }
        public bool IsSuccessful { get; set; }
    }
}
