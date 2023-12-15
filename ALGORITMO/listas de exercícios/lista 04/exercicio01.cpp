#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

void retornaMaiuscula (char n)
{
    if (n >= 'A' && n <= 'Z') cout << n << " Eh uma letra maiuscula. \n";
}

void retornMinuscula (char n)
{
    if(n >= 'a' && n <= 'z') cout << n << " Eh uma letra minuscula. \n";
}

void retornaLetra (char n)
{
     if(n >= 'a' && n <= 'z' || n >= 'A' && n <= 'Z') cout << n << " Eh uma letra \n";
}

void retornaVogal (char n)
{
    if (n == 'A' || n == 'E' || n == 'I' || n == 'O' || n == 'U' || n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u')
    {
        cout << n << " Eh uma vogal. \n";
    }
}

void retornaConsoante (char n)
{
      if (n == 'B' || n == 'C' || n == 'D' || n == 'F' || n == 'G' || n == 'H' || n == 'J' || 
    n == 'K' || n == 'L' || n == 'M' || n == 'N' || n == 'P' || n == 'Q' || n == 'R' || n == 'S' || n == 'T' || 
    n == 'V' || n == 'W' || n == 'X' || n == 'Y' || n == 'Z' || n == 'b' || n == 'c' || n == 'd' || n == 'f' || n == 'g' || 
    n == 'h' || n == 'j' || n == 'k' || n == 'l' || n == 'm' || n == 'n' || n == 'p' || n == 'q' || n == 'r' || n == 's' || 
    n == 't' || n == 'v' || n == 'w' || n == 'x' || n == 'y' || n == 'z')
    {
        cout << n << " Eh uma consoante. \n";
    }
}

void retornaAlgarismo (char n)
{
    if (n > 0 && n < 10) cout << n << " Eh um algarismo. \n";
}

int main ()
{
    char numero;
    cout << "Insira um unico digito: ";
    cin >> numero;
    retornaLetra (numero);
    retornaMaiuscula (numero);
    retornMinuscula (numero);
    retornaVogal (numero);
    retornaConsoante (numero);
    retornaAlgarismo (numero);
    getch();
    return 0;

}