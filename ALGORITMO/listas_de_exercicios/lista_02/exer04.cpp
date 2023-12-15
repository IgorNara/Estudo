#include<iostream>
#include<math.h>
using namespace std;

float Retorna_Radianos(float G)
{
    float R;
    R = (3.141592*G)/180;
    return R;
}

int main()
{
    float G;
    cout << "CONVERCAO DE GRAUS PARA RADIANOS \n\n";
    cout << "Digite a medida em Graus--> ";
    cin >> G;
    cout << Retorna_Radianos(G);
}