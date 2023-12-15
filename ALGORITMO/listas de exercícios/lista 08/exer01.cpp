#include<iostream>
using namespace std;

enum Tsexo{masculino = 1, feminino};
enum Testado{solteiro = 1, casado, viuvo, separado, desquitado};

string retorna_sexo(enum Tsexo sexo)
{
    switch(sexo)
    {
        case masculino: return("masculino");
        case feminino: return ("feminino");
        default: return ("ERRO: VALOR INVALIDO");
    }
}

string retorna_estado(enum Testado estado)
{
    switch(estado)
    {
        case solteiro: return("solteiro");
        case casado: return ("casado");
        case viuvo: return ("viuvo");
        case separado: return ("separado");
        case desquitado: return ("desquitado");
        default: return ("ERRO: VALOR INVALIDO");
    }
}


int main()
{
    enum Tsexo sexo;
    enum Testado estado;
    int s, e;
    cout << "Digite 1 para masculino ou 2 para feminino--> ";
    cin >> s;
    cout << "Digite 1 para solteiro, 2 para casado, 3 para viuvo, 4 para separado ou 5 para desquitado--> ";
    cin >> e;
    sexo = (enum Tsexo)s;
    estado = (enum Testado)e;
    cout << retorna_sexo(sexo) << "\n";
    cout << retorna_estado(estado);
}