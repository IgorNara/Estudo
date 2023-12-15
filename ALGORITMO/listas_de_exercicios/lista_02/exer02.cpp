#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

float retornaF (float c)
{
float f = (1.8 * c) + 32;
return f;
}

int main ()
{
    float c, retorno;
    cout << "Digite uma temperatura em graus celsius: \n";
    cin >> c;
    retorno = retornaF (c);
    cout << "A sua temperatura em Fahrenheit vale: " << retorno;
    getch();
}