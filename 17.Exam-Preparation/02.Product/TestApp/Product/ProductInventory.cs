using System.Text;

namespace TestApp.Product;

//описваме как изглежда един склад за продукти
public class ProductInventory
{
    //полета -> характеристики
    private readonly List<Product> _products = new();

    //методи -> действия

    //1. добавяме продукт в склада
    public void AddProduct(string name, double price, int quantity)
    {
        Product newProduct = new()
        {
            Name = name, 
            Price = price, 
            Quantity = quantity,
        };
        
        this._products.Add(newProduct);
    }

    //2. визуализираме какви продукти има в склада
    public string DisplayInventory()
    {
        StringBuilder sb = new();
        
        sb.AppendLine("Product Inventory:");
        foreach (Product product in this._products)
        {
            sb.AppendLine($"{product.Name} - Price: ${product.Price:f2} - Quantity: {product.Quantity}");
        }

        return sb.ToString().Trim();
    }

    //3. изчислява общата сума на цените на продуктите в склада
    public double CalculateTotalValue()
    {
        return this._products.Sum(product => product.Price * product.Quantity);
    }
}