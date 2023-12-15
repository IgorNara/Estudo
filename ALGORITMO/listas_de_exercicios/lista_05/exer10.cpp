#include<iostream>
using namespace std;

int main()
{
    int quadrado = 0, cubo = 0, i;
    cout << "CALCULA OS QUADRADOS E CUBOS DOS NUMEROS DE ATE 10 \n\n";
    cout << "       QUADRADO        CUBOS\n\n";
    i = 1;
    while(i <= 10)
    {
        quadrado = i*i;
        cubo = i*i*i;
        if(quadrado == 100)
        cout << i <<"-->   " << quadrado << "          " << cubo << "\n";
        else{
        cout << i <<"-->    " << quadrado << "           " << cubo << "\n";
        }
        i++;
    }
}