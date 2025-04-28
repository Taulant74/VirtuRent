namespace BackendAPI.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } = null!;
        public int? ParentCategoryId { get; set; }

        public Category? ParentCategory { get; set; }
    }

}
