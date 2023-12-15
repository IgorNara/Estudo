#include<iostream>
using namespace std;

int main()
{
    int tamanho, pos;
    cout << "Digite o tamanho do vetor--> ";
    cin >> tamanho;
    int v[tamanho];

    for(pos = 0; pos < tamanho; pos++)
    {
        cout << "Digite um valor para a posicao " << pos << "--> ";
        cin >> v[pos]; 
    }

    int v2[tamanho];
    for(pos = 0; pos < tamanho; pos++)
    {
        v2[pos] = v[pos];
    }

    for(pos = 0; pos < tamanho; pos++)
    {
        cout << v2[pos] << "\n";
    }
}