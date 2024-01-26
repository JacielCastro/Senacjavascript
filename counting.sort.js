var vetor = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];
var maximo = Math.max(...vetor);

var arrayDeContagem = [];
for (var indiceContagem = 0; indiceContagem <= maximo; indiceContagem++) {
    arrayDeContagem[indiceContagem] = 0;
}

var movimentacoes = 0;

for (var indice = 0; indice < vetor.length; indice++) {
    arrayDeContagem[vetor[indice]]++;
}

var vetorOrdenado = [];
for (var indiceOrdenado = 0; indiceOrdenado < arrayDeContagem.length; indiceOrdenado++) {
    while (arrayDeContagem[indiceOrdenado] > 0) {
        vetorOrdenado.push(indiceOrdenado);
        arrayDeContagem[indiceOrdenado]--;
        movimentacoes++;
    }
}


console.log("Vetor ordenado:", vetorOrdenado);
console.log("Número total de movimentações:", movimentacoes);