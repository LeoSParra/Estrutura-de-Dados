function bubblesort(vetor) {
    let aux = 0
    for(let i = 0; i < vetor.length; i++){

        for(let j = 0; j < vetor.length-i-1; j++){
            if (vetor[j] > vetor[j+1]){
                aux = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1] = aux
            }
        }
    }    
}
function selecaoDireta(vetor){
    for(let i=0; i < vetor.length; i++){   
        let menor = vetor[i]
        let posicao = i
        for (let j = i+1; j < vetor.length; j++) {
            if (vetor[j] < menor) {
                menor = vetor[j]
                posicao = j
            }
        }
        let auxiliar = vetor[i]
        vetor[i] = vetor[posicao]
        vetor[posicao] = auxiliar
    }
}
function insercaoDireta1(vetor){
    for (let i = 1; i < vetor.length; i++) {
        for (let j = 0; j < i; j++) {
            if(vetor[i] < vetor[j]) {
                let auxiliar = vetor[i]
                for (let k = i; k > j; k--) {
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = auxiliar
            }
        }
    }
}

function insercaoDireta2(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let atual = vetor[i]
        let j
        for (j = i - 1; j >= 0 && vetor[j] > atual; j--) {
            vetor[j + 1] = vetor[j]
        }
        vetor[j + 1] = atual
    }
}


let vetor = [7,3,1,9,2,8]
console.time('bubblesort...')
bubblesort(vetor)
console.timeEnd('bubblesort...')
console.log(vetor)

vetor = [7,3,1,9,2,8]
console.time('selecaoDireta...')
selecaoDireta(vetor)
console.timeEnd('selecaoDireta...')
console.log(vetor)

vetor = [7,3,1,9,2,8]
console.time('insercaoDireta1...')
insercaoDireta1(vetor)
console.timeEnd('insercaoDireta1...')
console.log(vetor)








