#include<iostream>
using namespace std;

int retorno (int numero){
   if(numero < 0){
    return numero*(-1);
   }
   return numero;
}

int main()
{
    int n;
    cout << "Escolha um valor: ";
    cin >> n;
    cout << retorno (n);
}