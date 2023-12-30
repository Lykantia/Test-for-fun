using System;

public class AgeClassifier
{
    public static void Main()
    {
        Random random = new Random();
        int age = random.Next(101);

        if (age == 0)
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You're in the prenatal stage!");
        }
        else if (age > 0 && age <= 3 ) 
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You're a toddler!");
        }
        else if (age <= 6)
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You're a preschooler!");
        }
        else if (age == 7)
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You're a school kid!");
        }
        else if (age <= 18)
        {
            Console.WriteLine($" You are {age} years old. You should be at school.");
        }
        else if (age <= 30)
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You are of working age!");
        }
        else if (age <= 50)
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You are middle-aged!");
        }
        else
        {
            Console.WriteLine($"Congratulations, you are {age} years old. You are experienced and wise, enjoy life and share your wisdom!");
        }
    }
}