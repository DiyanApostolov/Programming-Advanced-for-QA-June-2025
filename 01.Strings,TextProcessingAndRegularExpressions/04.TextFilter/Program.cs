﻿
string[] bannedWords = Console.ReadLine().Split(", ");

string textToEdit = Console.ReadLine();

foreach (var wordToReplace in bannedWords)
{
    string asterixWord = "";

    for (int i = 0; i < wordToReplace.Length; i++)
    {
        asterixWord += '*';
    }

    textToEdit =  textToEdit.Replace(wordToReplace, asterixWord);
}

Console.WriteLine(textToEdit);
