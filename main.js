const value = document.querySelector('#value')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const reset = document.querySelector('#reset')

let count = 0
let intervalId = 0

// FUNÇÃO QUE ATUALIZA O VALOR DO "span #value" CONTIDO NO HTML
function updateValue() {
    value.innerHTML = count
}

plus.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count++;
        updateValue()
    }, 55)
})

minus.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count--;
        updateValue()
    }, 55)
})

reset.addEventListener('click', () => {
    count = 0
    updateValue()
})

document.addEventListener('mouseup', () => clearInterval(intervalId))