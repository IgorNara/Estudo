#include<iostream>
using namespace std;

int main()
{
    int tamanho, pos;
    cout << "Digite o tamanho do primeiro vetor--> ";
    cin >> tamanho;
    int v[tamanho];
    for(pos = 0; pos < tamanho; pos++)
    {
        cout << "Digite o valor da posicao " << pos << "--> ";
        cin >> v[pos];
    }


    int tamanho2;
    cout << "Digite o tamanho do segundo vetor--> ";
    cin >> tamanho2;
    int v2[tamanho2];
    for(pos = 0; pos < tamanho2; pos++)
    {
        cout << "Digite o valor da posicao " << pos << "--> ";
        cin >> v2[pos];
    } 


    if(tamanho > tamanho2)
    {
        while(tamanho2 < tamanho)
        {
            v2[tamanho2] = 0;
            tamanho2++;
        }
    }
    else{
        while(tamanho < tamanho2)
        {
            v[tamanho] = 0;
            tamanho++;
        }
    }


    
}