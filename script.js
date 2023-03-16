import { AlertError } from "./alertError.js"

const form = document.querySelector('form')
const modalWrapper = document.querySelector('.modalWrapper')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const resultMessage = document.querySelector('.resultMessage')
const buttonClose = document.querySelector('.close')



    form.onsubmit = function (event) {
        event.preventDefault()
    
        const weight = inputWeight.value
        const height = inputHeight.value

        const showAlertError = isNotANumber (weight) || isNotANumber (height)

        if (showAlertError) {
            AlertError.open()
            return;
        }

        AlertError.close()

        const result = imc(weight, height)
    
        const message = `Seu IMC é de ${result}`
        
        resultMessage.innerText = message
        modalWrapper.classList.add('open')
    }
    
    buttonClose.onclick = () => {
        modalWrapper.classList.remove('open')
    }

function isNotANumber (value) {
    return isNaN(value) || value == ""
}

function imc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}




    







    



 