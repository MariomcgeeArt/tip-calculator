const inputBill = document.getElementById('input-bill')
const inputTip = document.getElementById('input-tip')
const inputPeople = document.getElementById('input-people')


const displayTotal = document.getElementById('display-total')
const displayTip = document.getElementById('display-tip')
const displaySplit = document.getElementById('display-split')

let bill = 0

function calculateTotal() {
    let bill = parseFloat(inputBill.value)
    let percent = parseInt(inputTip.value)
    let people = parseInt(inputPeople.value)

    let tip = bill * percent / 100
    let total = bill + tip
    let split = total/people

 
    displayTotal.textContent = `\$ ${total.toFixed(2)}`
    displayTip.textContent = `\$ ${tip.toFixed(2)}`
    displaySplit.textContent = `\$ ${split.toFixed(2)}`




}


inputBill.addEventListener('change', function (e) {
    calculateTotal()
})




inputTip.addEventListener('change', function (e) {
    calculateTotal()
})



inputPeople.addEventListener('change', function (e) {
    calculateTotal()
})











//const badNumber
//isNaN('123') // true - Not a number!
//isNaN(123)   // false - a Number!

//const tip = bill * percent / 100
//const total = bill + tip

//displayTip.innerHTML = tip
//displayTotal.innerHTML = total


//inputBill.addEventListener('change', handleBill(e))





//function calculateTip() {

  
  //  displayTip.innerHTML = tip.toFixed(2)
   // displayTotal.innerHTML = total.toFixed(2)
  //  displayEach.innerHTML = perPerson.toFixed(2)
  
//}