namespace BackendAPI.Models
{
    public class Listing
    {
        public int ListingId { get; set; }
        public int SellerId { get; set; }
        public int CategoryId { get; set; }

        public string Title { get; set; } = null!;
        public string? Description { get; set; }
        public decimal DailyPrice { get; set; }
        public string Location { get; set; } = null!;
        public char Status { get; set; } = 'A';

        public User? Seller { get; set; }
        public Category? Category { get; set; }
    }

}
