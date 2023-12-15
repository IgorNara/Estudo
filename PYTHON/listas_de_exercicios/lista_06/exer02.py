vetor1 = [1, 2, 3, 4];
vetor2 = [4, 3, 2, 1, 5];
soma_valores = [];

tamanho_v1 = len(vetor1);
tamanho_v2 = len(vetor2);

if(tamanho_v1 > tamanho_v2):
    diferenca = tamanho_v1 - tamanho_v2;
    for i in range(diferenca):
        vetor2.append(0);
    
    for i in range(tamanho_v1):
        soma_valores.append(vetor1[i] + vetor2[i]);
        print(soma_valores[i])
else:
    diferenca = tamanho_v2 - tamanho_v1;
    for i in range(diferenca):
        vetor1.append(0);
    for i in range(tamanho_v2):
        soma_valores.append(vetor1[i] + vetor2[i])
        print(soma_valores[i])
       

