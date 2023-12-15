#include<iostream>
#include<conio.h>
using namespace std;

int unidades (int &unidade, int &dezena, int &centena, int &unidadeM, int &dezenaM, int &centenaM, int numero)
{
    if (numero < 1000000 && numero >= 0)
    {
        if(numero >= 100000)
        {
            centenaM = numero / 100000;
            numero = numero - (centenaM * 100000);
        }
        
        if(numero >= 10000)
        {
            dezenaM = numero / 10000;
            numero = numero - (dezenaM * 10000);
        }

        if (numero >= 1000)
        {
            unidadeM = numero / 1000;
            numero = numero - (unidadeM * 1000);
        }

        if(numero >= 100)
        {
            centena = numero / 100;
            numero = numero - (centena * 100);
        }

        if(numero >= 10)
        {
            dezena = numero / 10;
            numero = numero - (dezena * 10);
        }

        if(numero >= 0)
            unidade = numero / 1;
    
    return 1;
    }
    else{ if(numero > 1000000 || numero < 0 || numero % 1 < 0)    
        return 0;
        else{return -1;}
    }
    
}

int main()
{
    int u = 0, d= 0, c = 0, uM = 0, dM = 0, cM = 0, num;
    cout << "Digite um numero natural menor que 1 000 000---> ";
    cin >> num;
    switch (unidades (u, d, c, uM, dM, cM, num))
    {
    case 1: cout << num << " Possui:\n";
    if(cM > 0) {cout << "Centenas de milhar---> " << cM << "\n";}
        if(dM > 0) {cout << "Dezenas de milhar---> " << dM << "\n";}
            if(uM > 0) {cout << "Unidades de milhar---> " << uM << "\n";}
                if(c > 0) {cout << "Centenas---> " << c << "\n";}
                    if(d > 0) {cout << "Dezenas---> " << d << "\n";}
                        if(u > 0) {cout << "Unidades---> " << u << "\n";}
        break;
    
    case 0: cout << "ERRO: NUMERO FORNECIDO EXTRAPOLA O VALOR PEDIDO.";
        break; 
    
    case -1: cout << "ERRO: NUMERO FORNECIDO NAO E NATURAL.";
        break;
    } 
    getch();

}