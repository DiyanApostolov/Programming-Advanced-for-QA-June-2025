﻿//Program.cs -> описваме програмна логика (въвеждане на входни данни, отпечатване на конзолата, пресмятания, създава обекти, ...)

//-------------------------------DOG----------------------------------------------
Dog dog = new Dog();

//Dog() -> default конструктор; създава празен обект; вдграден

//dog
//Name: null
//Breed: null
//Age: 0

//задаваме стойност на properties (set;)
dog.Name = "Sharo";
dog.Breed = "poodle";
dog.Age = 5;
//dog
//Name: "Sharo"
//Breed: "poodle"
//Age: 5

//достъпваме стойност на properties (get;)
Console.WriteLine("My dog's name is: " + dog.Name);
Console.WriteLine("My dog's age is: " + dog.Age);
Console.WriteLine("My dog's breed is: " + dog.Breed);

//Bark
dog.Bark(); //изпълни метода Bark от клас Dog

//---------------------------------DOG-----------------------------------------------


//---------------------------------Person--------------------------------------------

//НАЧИН 1: създаваме празен обект и после му задаваме стойности
Person p1 = new Person(); //нов празен обект -> след това да му задавам стойности на пропъртитата
//p1
//Name = null
//Age = 0
//Salary = 0.0
p1.Name = "Stefan";
p1.Age = 10;
p1.Salary = 200.45;

//НАЧИН 2: създаваме директно обект с определени характеристики
Person p2 = new Person("Pesho", 23, 3400.80);//нов обект със зададените характеристики
//p2
//Name = "Pesho"
//Age = 23
//Salary = 3400.80

//---------------------------------Person--------------------------------------------