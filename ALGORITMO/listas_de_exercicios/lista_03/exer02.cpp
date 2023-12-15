#include<iostream>
#include<conio.h>
#include<math.h>

using namespace std;

void soma(int &Nx, int &Dx, int Ny, int Dy){
    int numerador = ((Nx * Dy) + (Ny * Dx));
    int denominador = Dx * Dy;
    Nx = numerador;
    Dx = denominador;
}

void subtracao(int Nx, int Dx, int &Ny, int &Dy){
    Ny = ((Nx * Dy) - (Ny * Dx));
    Dy = Dx * Dy;
}

int multiplicacao(int Nx, int Dx, int Ny, int Dy, int N){
    N = Nx * Ny;
    return Dx * Dy; 
}




int main(){
    int Nx, Dx, Ny, Dy;
    cout << "Digite o numerador do primeiro numero racional--> ";
    cin >> Nx;
    cout << "Digite o denominador do primeiro numero racional--> ";
    cin >> Dx;
    cout << "Digite o numerador do segundo numero racional--> ";
    cin >> Ny;
    cout << "Digite o denominador do segundo numero racional--> ";
    cin >> Dy;
    soma(Nx, Dx, Ny, Dy);
    cout << "Soma = " << Nx << "/" << Dx;
}