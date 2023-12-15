#include<iostream>
#include<math.h>

using namespace std;

bool verifica_vogal(char x){
    return (x == 'a') || (x == 'e') || (x == 'i') || (x == 'o') || (x == 'u') || (x == 'A') || (x == 'E') || 
    (x == 'I') || (x == 'O') || (x == 'U');
}

bool verifica_algarismo(char x){
    return (x >= 0) && (x <= 9);
}

bool verifica_minuscula(char x){
    return (x >= 'a') && (x <= 'z');
}

bool verifica_maiuscula(char x){
    return (x >= 'A') && (x <= 'Z'); 
}

bool verifica_letra(char x){
    return x >= 'a' && x <= 'z' || x >= 'A' && x <= 'Z';
}

bool verifica_consoante(char x){
    if(!verifica_vogal(x))
        return true;
}

bool verifica_par(char x){
    return (x%2) == 0;
}

int main()
{
char x;
bool resultado;
cout << "Digite UMA unica letra: ";
cin >> x;
resultado = verifica_vogal(x);
cout << resultado << "\n";
cout << verifica_algarismo(x) << "\n";
cout << verifica_minuscula(x) << "\n";
cout << verifica_maiuscula(x) << "\n";
cout << verifica_letra(x) << "\n";
cout << verifica_consoante(x) << "\n";
cout << verifica_par(x);
}