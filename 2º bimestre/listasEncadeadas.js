function LinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
    }

    let length = 0
    let head = null

    this.append = function (element) {
        let node = new Node(element)
        let current

        if (head == null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.size = function () {
        return length
    }

    this.display = function () {
        let current = head
        while (current) {
            console.log(current.element)
            current = current.next
        }
    }

    this.removeFirst = function () {
        if (head == null) {
            return "Lista Vazia"
        } else {
            let current = head
            head = current.next
            current.next = null
            length--
            return current.element
        }

    }

    this.addFirst = function (element) {
        let node = new Node(element)
        node.next = head
        head = node
        length++
    }

    this.getPosition = function (element) {
        let current = head
        let position = 0

        while (current) {
            if (current.element == element) {
                return position
            }
            current = current.next
            position++
        }

        return "Esse elemento não existe"
    }

    this.removeAt = function(position) {
        if (position < 0 || position >= length) {
          return null
        }
    
        let current = head
        let previous = null
        let index = 0
    
        if (position === 0) {
          head = current.next
        } else {
          while (index < position) {
            previous = current
            current = current.next
            index++
          }
    
          previous.next = current.next
        }
    
        current.next = null
        length--
        return current.element
      }
}

let lista = new LinkedList()
lista.append(10)
lista.append(12)
lista.display()
console.log("---remove o primeiro ---")
lista.removeFirst()
lista.display()
console.log("--- adiciona 40---")
lista.append(40)
lista.display()
console.log("--- adiciona 10 e 5 no início ---")
lista.addFirst(5)
lista.addFirst(10)
lista.display()
console.log("--- posição do elemento 40 ---")
console.log(lista.getPosition(40))
console.log("--- posição do elemento 100 ---")
console.log(lista.getPosition(100))
console.log("--- remove elemento na posição 1 ---")
console.log(lista.removeAt(2))
lista.display()