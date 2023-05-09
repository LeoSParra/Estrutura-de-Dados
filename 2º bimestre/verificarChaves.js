function verificarParentesesChavesColchetes(vetor) {
    let verificar = []

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] == '{' || vetor[i] == '[' || vetor[i] == '('){
            verificar.push(vetor[i])
        }
        else if (vetor[i] == '}' || vetor[i] == ']' || vetor[i] == ')') {
            let top = verificar.pop()

            if ((vetor[i] === ')' && top !== '(') || (vetor[i] === ']' && top !== '[') || (vetor[i] === '}' && top !== '{')) {
                return "Acerta isso bicho burro"
            }
        }
    }
    return "Acertou bichao"
}
  let vetor = ['{', '[', '(', ')', ']', '}']
console.log(verificarParentesesChavesColchetes(vetor))