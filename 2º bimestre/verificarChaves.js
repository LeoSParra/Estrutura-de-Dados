function verifica(array) {
    let verify = []

    for (let i = 0; i < vetor.length; i++) {
        if (array[i] == '{' || array[i] == '[' || array[i] == '(') {
            verify.push(array[i])
        }
        else if (array[i] == '}' || array[i] == ']' || array[i] == ')') {
            let topo = verify.pop()
            if ((array[i] == ')' && topo !== '(') || (array[i] == ']' && topo !== '[') || (array[i] == '}' && topo !== '{')) {
                return 'erro'
            }
        }
    }
    return 'Correto'


}
let vetor = ['{', '[', '(', ')', ']', '}']
console.log(verifica(vetor))

//Adriano Rodrigues Gomes da Silva
//Leonardo Santos Parra