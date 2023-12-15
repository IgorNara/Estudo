#include<iostream>
using namespace std;

void funcionario(string nome, int dia, int mes, int ano, float salario, char cargo)
{
    cout << "Nome do funcionario--> " << nome;
    cout << "Data de nascimento--> " << dia << "/" << mes << "/" << ano;
    cout << "Salario--> " << salario;
    cout << "Cargo--> " << cargo;
}

