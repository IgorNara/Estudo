#include<iostream>
using namespace std;

int main()
{
    int n, i = 1, resultado = 0;
    cout << "Insira um numero--> ";
    cin >> n;
    while(resultado < n)
    {
        resultado = i * i;
        if(resultado > n)
        {
            i--;
            resultado = i * i;
            break;
        }
        if(resultado == n)
        break;
        i++;
    }
    cout << "Quadrado mais proximo de " << n << "--> " << i << " * " << i << " = " << resultado;
}