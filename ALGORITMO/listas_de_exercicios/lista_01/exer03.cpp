#include<iostream>
using namespace std;

void sobrenome_nome(string nome, string sobrenome)
{
    cout << sobrenome << ", " << nome;
}

int main()
{
    string nome, sobrenome;
    cout << "Igor Nara";
    cout << "Criado em: 01/03/2023";
    cout<< "Digite o seu nome--> ";
    cin >> nome;
    cout << "Digite o seu sobrenome--> \n";
    cin >> sobrenome;
    sobrenome_nome(nome, sobrenome);
}