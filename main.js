const inputBill = document.getElementById('input-bill')
const inputTip = document.getElementById('input-tip')
const inputPeople = document.getElementById('input-people')
const displayBill = document.getElementById('display-total')
const displaytip = document.getElementById('display-tip')

const const percent = parseInt(inputBill.value)
const const percent = parseInt(inputTip.value)
const const percent = parseInt(inputPeople.value)

const tip = bill * percent / 100
const total = bill + tip

displayTip.innerHTML = tip
displayTotal.innerHTML = total


inputBill.addEventListener('change', handleBill)

function handleBill(e) {

}