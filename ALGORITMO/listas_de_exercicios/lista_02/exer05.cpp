#include<iostream>
#include<math.h>
using namespace std;

float Retorna_Radianos(float G)
{
    float R = (3.141592*G)/180;
    return R;
}

float Area_do_Triangulo(float a, float b, float angulo)
{
    float radianos = Retorna_Radianos(angulo);
    float A = (a * b * sin(radianos))/2;
    return A;
}

int main()
{
    float a, b, angulo; 
    cout << "AREA DE UM TRIANGULO \n\n";
    cout << "Digite o valor do lado a--> ";
    cin >> a;
    cout << "Digite o valor do lado b--> ";
    cin >> b;
    cout << "Digite o angulo formado por eles--> ";
    cin >> angulo;
    cout << Area_do_Triangulo(a, b, angulo);
}

