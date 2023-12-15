vetor1 = [1, 3, 5, 7];
vetor2 = [2, 4, 6, 8];
intercalacao = [];

for i in range(0, len(vetor1)):
    intercalacao.append(vetor1[i])
    intercalacao.append(vetor2[i])

print(intercalacao);
