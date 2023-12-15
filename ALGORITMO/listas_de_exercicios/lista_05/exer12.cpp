#include<iostream>
using namespace std;

int main()
{
    int quantidadeDeSalarios = 1;
    float salario, media, MaisBaixo = 0, MaisAlto = 0, resultado = 0;
    string nome, fim;

    while (fim != "fim")
    {
        cout << "Digite o nome do funcionario--> ";
        cin >> nome; 
        cout << "Digite o salario do funcionario--> ";
        cin >> salario;
        media = (salario + resultado)/quantidadeDeSalarios;
        resultado = salario;
        MaisBaixo = salario;
            if(resultado < MaisBaixo)
            MaisBaixo = resultado;

                if(resultado > MaisAlto)
                MaisAlto = resultado;

        quantidadeDeSalarios++;

        cout << "Deseja continuar, Sim ou nao(fim)--> ";
        cin >> fim;
    }
    cout << "Media dos salarios--> " << media << "\n";
    cout << "Salario mais alto--> " << MaisAlto << "\n";
    cout << "Salario mais baixo--> " << MaisBaixo << "\n";
}