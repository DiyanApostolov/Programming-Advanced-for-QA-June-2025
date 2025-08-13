namespace TestApp.Product;

//описваме как изглежда всеки един продукт
public class Product
{
    public string Name { get; init; } = null!;
    
    public double Price { get; init; }
    
    public int Quantity { get; init; }
}
