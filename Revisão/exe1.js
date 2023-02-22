// criar dois vetores e intercalar os dois em um terceiro vetor
function exe1(){
    vetor = []
    vetor2 = []
    vetor3 = []
    leitura(vetor, vetor2)
    intercalar(vetor,vetor2, vetor3)
}

function leitura(vetor, vetor2){
    for (let i = 0; i < 25; i++){
        vetor[i] = i
        vetor2[i] = i+10
    }
}

function intercalar(vetor, vetor2, vetor3){
    for (let i = 0; i < vetor.length; i++){
        vetor3.push (vetor[i])
        vetor3.push(vetor2[i])
    }
    console.log(vetor3)
}
