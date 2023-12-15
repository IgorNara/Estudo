#include<iostream>
using namespace std;

struct Tendereco
{
    string rua, bairro, cidade, estado;
    int numero, cep;
} endereco;

int main()
{
    cout << "\nDigite o nome da sua rua--> ";
    cin >> endereco.rua;
    cout << "\nDigite o nome do seu bairro--> ";
    cin >> endereco.bairro;
    cout << "\nDigite o nome da sua cidade--> ";
    cin >> endereco.cidade;
    cout << "\nDigite o nome do seu estado--> ";
    cin >> endereco.estado;
    cout << "\nDigite o numero de sua casa--> ";
    cin >> endereco.numero;
    cout << "\nDigite o seu cep--> ";
    cin >> endereco.cep;
    cout << "\n SEU ENDERECO: \n";
    cout << "Estado--> " << endereco.estado;
    cout << "\nCidade--> " << endereco.cidade;
    cout << "\nBairro--> " << endereco.bairro;
    cout << "\nRua--> " << endereco.rua;
    cout << "\nNumero da casa--> " << endereco.numero;
    cout << "\nCEP--> " << endereco.cep;

}