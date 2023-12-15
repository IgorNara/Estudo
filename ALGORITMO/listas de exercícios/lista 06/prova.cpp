#include<iostream>
using namespace std;

bool primo(int numero)
{
    int divisor = 1, totaldiv = 0;
    while(divisor<= numero)
    {
        if((numero%divisor)==0)
        totaldiv++;

        divisor++;
    }

    if(totaldiv == 2)
    return true;

    return false;

}

int mdc(int a, int b)
{
    int resultado = 1, i = 2;
    while(1)
    {
        if(a == 1 && b == 1)
        break;

        if(primo(i) == true)
        {
            while(1)
            {
                if(a%i == 0 && b%i == 0)
                resultado = resultado*i;

                if(a%i != 0 && b%i != 0)
                break;

                if(a != 1)
                {
                    if(a%i == 0)
                    a = a/i;
                }

                if(b != 1)
                {
                    if(b%i == 0)
                    b = b/i;
                }
            }
        }
        i++;
    }
    return resultado;
}

int proxp(int n)
{
    int primos = n, divisor = 1;
    while(1)
    {
        primos++;
        if(primo(primos) == true)
        break;
    }
    return primos;
}


int main()
{
int a =180, b=420;
cout << mdc(a, b) << "\n";
cout << proxp(86);
}