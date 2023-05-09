function quicksort(array, left, right) {
    let i = left
    let j = right
    let auxiliar
    let pivotidx = Math.floor((left + right) / 2)
    let pivot = +array[pivotidx]

    // partição
    while (i <= j) {
        while (+array[i] < pivot) {
            i++
        }
        while (+array[j] > pivot) {
            j--
        }           
        if (i <= j) {
            auxiliar = array[i]
            array[i] = array[j]
            array[j] = auxiliar
            i++
            j--
        }
    }
    // recursão
    if (left < j) {
        quicksort(array, left, j)
    }
    if (i < right) {
        quicksort(array, i, right)
    }
    return array
}

let vetor = [10, 2, 5, 7, 4, 7, 6, 12]
console.log(quicksort(vetor, 0, vetor.length-1))
