function exe2(){
    let vetor = []
    let num = 100
    while (num != 0){
        num = Number(prompt(`1 - inserir \n 2 - remover \n 3 - somar ímpar ou par \n 4 - somar de um ponto ao outro \n 0 - sair do programa`))
        if (num == 1) {
            inserir(vetor)
        } 
        else if (num == 2) {
            remover(vetor)
        }
        else if (num == 3) {
            somarImparPar(vetor)
        }
        else if (num == 4) {    
            somarIndice(vetor)
        }
    }
    console.log(`${vetor}`)
}

function inserir(vetor){
    let quantidade = (Number(prompt(`Informe quantos números voce quer inserir: `)))

    for (let i = 0; i < quantidade; i++){
        vetor.push(Number(prompt(`Insira o(s) valor(es): `)))
    }
}

function remover(vetor){
    let indice = (Number(prompt(`Informe qual o índice a ser removido: `)))
    if (indice == 0) {
        vetor.shift()
    }
    else {
        vetor.splice(indice, indice - 1)
    }
}

function somarImparPar(vetor){
    let escolha = Number(prompt(`1 - impar, 2 - par: `))
    let soma = 0
    if (escolha == 2){
        for (let i = 0; i < vetor.length; i++){
            if (vetor[i] % 2 == 0){
                soma += vetor[i]
            }
        }
        console.log(`${soma}`)
    }
    if (escolha == 1){
        for (let i = 0; i < vetor.length; i++){
            if (vetor[i] % 2 != 0){
                soma += vetor[i]
            }
        }
        console.log(`${soma}`)
    }
}

function somarIndice(vetor){
    let inicial = Number(prompt(`Insira o indice inicial: `))
    let final = Number(prompt(`Insira o indice final: `))
    let soma = 0
    for (let i = inicial; i < vetor[final]; i++){
        soma += vetor[i]
    }
    console.log(`${soma}`)
}                                                    