function exe2(){
    let vetor = []

    while (num != 0){
        let num = Number(prompt(`1 - inserir \n 2 - remover \n 3 - somar ímpar ou par \n 4 - somar de um ponto ao outro \n 0 - sair do programa`))
        if (num = 1){
            inserir(vetor)
        } 
        else if (num == 2){
            remover(vetor)
        }
    }
}

function inserir(vetor){
    let quantidade = (Number(prompt(`Informe quantos números voce quer inserir: `)))

    for (let i = 0; i < quantidade; i++){
        vetor.push(Number(prompt(`Insira o(s) valor(es): `)))
    }
}

function remover(vetor){
    let quantidade = (Number(prompt(`Informe qual o índice a ser removido: `)))
    vetor.splice(quantidade, quantidade)
}

function somar(vetor){
    let 
}