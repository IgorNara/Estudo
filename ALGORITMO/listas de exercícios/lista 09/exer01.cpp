#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    ofstream saida;
    string nome;
    int nota;
    saida.open("Dados.txt");
    cout << "Digite um nome--> ";
    cin >> nome;
    saida << "\n" <<nome;
    cout << "Digite uma nota--> ";
    cin >> nota;
    saida << "\n" << nota;
    saida.close();
}