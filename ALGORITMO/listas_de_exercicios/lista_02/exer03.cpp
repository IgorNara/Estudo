#include<iostream>
#include<math.h>
using namespace std;

float Retorna_Volume(float R)
{
    float V;
    V = (4*3.141592*(pow(R, 3)))/3;
    return V;
}

int main()
{
    float R;
    cout << "CALCULA VOLUME \n\n";
    cout << "Digite o raio da esfera--> ";
    cin >> R;
    cout << Retorna_Volume(R);
}