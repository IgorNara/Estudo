#include<iostream>
#include<math.h>
using namespace std;

float Calcula_Distancia(float Xa, float Ya, float Xb, float Yb)
{
    float distancia = sqrt(pow((Xa - Xb),2) + pow((Ya - Yb),2));
    return distancia;
}

int main()
{
    float Xa, Ya, Xb, Yb;
    cout << "DISTANCIA ENTRE DOIS PONTOS \n\n";
    cout << "Xa--> ";
    cin >> Xa;
    cout << "Ya--> ";
    cin >> Ya;
    cout << "Xb--> ";
    cin >> Xb;
    cout << "Yb--> ";
    cin >> Yb;
    cout << Calcula_Distancia(Xa, Ya, Xb, Yb);
}