using System.Collections.Generic;

namespace TestApp;

public class DictionaryIntersection
{
    public static Dictionary<string, int> Intersect(
                                                Dictionary<string, int> dict1, 
                                                Dictionary<string, int> dict2)
    {
        //dict1:
        //"Georgi" -> 1
        //"Aleks" -> 2
       
        //dict2:
        //"Georgi" -> 1
        //"Pesho" -> 4
       

        Dictionary<string, int> intersection = new(); //нов празен речник

        foreach (KeyValuePair<string, int> kvp in dict1)
        {
            //проверка дали взетия запис от първия речник го има във втория речник
            if (dict2.ContainsKey(kvp.Key) && dict2[kvp.Key] == kvp.Value)
            {
                //добавяме общия запис в новия речник
                intersection[kvp.Key] = kvp.Value;
            }
        }

        //връща се речника, в който има само общите записи
        //intersection:
        //"Georgi" -> 1
        return intersection;
    }
}
