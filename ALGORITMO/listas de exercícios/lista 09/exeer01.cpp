#include<iostream>
#include<fstream>
using namespace std;

int main()
{
    ifstream entrada;
    ofstream saida;
    string nome, pdl;
    int nota;
    entrada.open("Dados.txt");
    saida.open("Copia.txt");

        getline(entrada, pdl);
        while(!entrada.eof())
        {
            getline(entrada, nome);
            saida << "\n" << nome;
            entrada >> nota;
            saida << "\n" << nota;
            getline(entrada, pdl);
        }
      

    entrada.close();
    saida.close();
}