tamanho_vetor = input("Quantos números serão digitados? ");
vetor = [];
for i in range(0, int(tamanho_vetor)):
    vetor.append(input("Digite um valor: "));

def inverte_vetor():
    for i in range(1, int(tamanho_vetor)):
        ultimo_valor = vetor.pop(i)
        vetor.insert(0, ultimo_valor)
       
inverte_vetor();
print(vetor)






