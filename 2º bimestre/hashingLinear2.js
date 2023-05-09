
function insert(array, key) {
  let rodou = false
  let key1 = key.charCodeAt()
  let vmod = key1 % 7
  let i = 0

  let positions = search(array, key)
  if (positions.length > 0) {
    for (let j = 0; j < 7; j++) {
      if (array[vmod + j] == null) {
        array[vmod + j] = key1
        break
      }
    }
    return;
  }

  while (array[vmod + i] != key1) {
    if (array[vmod + i] == null) {
      array[vmod + i] = key1
      return
    } else {
      for (let j = 1; j < 7; j++) {
        if (array[vmod + i + j] == "") {
          array[vmod + i + j] = key1
          return
        }
      }
    }

    if (i == 7 && rodou == true) {
      return "Cheio"
    }
    i++;
    if (i == 7) {
      rodou = true
      i = 0
      vmod = 0
    }
  }
}

function search(array, key) {
  let key1 = key.charCodeAt()
  let positions = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] == key1) {
      positions.push(i)
    }
  }
  return 'Encontrado nas posições ' + positions
}
// Verifica se a chave já existe na tabela hash

let vetor = []
insert(vetor, "D")
insert(vetor, "D")
insert(vetor, "R")
console.log(search(vetor, 'D'))
console.log(vetor)