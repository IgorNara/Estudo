#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

int resultadoDelta (int a, int b, int c)
{
    int delta;
    delta = b*b - (4 * a * c);
    return delta;
}


int main()
{
    int resultado, a, b, c;
    cout<< "delta = b.b - 4.a.c\n";
    cout<< "Escolha um valor para a: ";
    cin >> a;
    cout<< "Escolha um valor para b: ";
    cin >> b;
    cout<< "Escolha um valor para c: ";
    cin >> c;
    resultado = resultadoDelta(a, b, c);
    cout<< "delta = " << resultado;
    getch();
    return 0;

}