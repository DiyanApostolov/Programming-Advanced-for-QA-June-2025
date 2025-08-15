using System.Collections.Generic;

namespace TestApp;

public class Fruits
{
    public static int GetFruitQuantity(Dictionary<string, int>? fruitDictionary, string? fruitName)
    {
        //fruitDictionary
        //"apple" -> 5
        //"banana" -> 10
        //"orange" -> 30

        //fruitName = null -> търсения плод, на който трябва да кажем колко е количеството
        if (fruitDictionary is null || fruitName is null)
        {
            return 0;
        }
        
        if (fruitDictionary.TryGetValue(fruitName, out int quantity))
        {
            return quantity;
        }

        return 0;
    }
}
