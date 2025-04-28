namespace BackendAPI.Models
{
    public class Message
    {

        public string Id { get; set; } = null!;

        public string RoomId { get; set; } = null!;
        public int SenderId { get; set; }

        public string Text { get; set; } = null!;
        public DateTime SentAt { get; set; } = DateTime.UtcNow;
        public List<int> ReadBy { get; set; } = new();
    }

}
