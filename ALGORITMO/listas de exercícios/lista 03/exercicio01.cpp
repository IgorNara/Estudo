#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

void troca (float &xi, float &yi, float xf, float yf)
{
    float xm = (xi + xf) / 2;
    float ym = (yi + yf) / 2;
    xi = xm;
    yi = ym;
}

int main()
{
    float Xinicial, Yinicial, Xfinal, Yfinal;
    cout << "PONTO MEDIO... \n";
    cout << "Digite o valor inicial de x: ";
    cin >> Xinicial;
    cout << "Digite o valor inicial de y: ";
    cin >> Yinicial;
    cout << "Digite o valor final de x: ";
    cin >> Xfinal;
    cout << "Digite o valor final de y: ";
    cin >> Yfinal;
    troca (Xinicial, Yinicial, Xfinal, Yfinal);
    cout << "O ponto medio esta para x: "<< Xinicial << " e y: " << Yinicial << "\n" << "Ou: " << "(" << Xinicial << ", " << Yinicial << ")";
}