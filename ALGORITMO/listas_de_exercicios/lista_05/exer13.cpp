#include<iostream>
using namespace std;

int main()
{
    int n, pares = 0, impares = 0, i = 1, quantidadeDivisores = 0;
    while(1)   
    {
        cout << "Digite um numero inteiro positivo--> ";
        cin >> n;
        if(n == 0)
            break;
        if(n % 2 == 0)
            pares++;
        else impares++;  

            
    }
    cout << "Voce digitou " << pares << " numeros pares e " << impares << " numeros impares.";
}