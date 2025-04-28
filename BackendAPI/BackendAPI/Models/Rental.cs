namespace BackendAPI.Models
{
    public class Rental
    {
        public int RentalId { get; set; }
        public int ListingId { get; set; }
        public int RenterId { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal TotalPrice { get; set; }
        public char Status { get; set; } = 'P';

        public Listing? Listing { get; set; }
        public User? Renter { get; set; }
    }

}
