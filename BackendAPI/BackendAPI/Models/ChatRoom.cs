namespace BackendAPI.Models
{
    public class ChatRoom
    { 
        public string Id { get; set; } = null!;

        public int ListingId { get; set; }

        public List<int> Participants { get; set; } = new();

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }

}
