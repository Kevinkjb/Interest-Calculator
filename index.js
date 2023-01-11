const deposit = document.querySelector("#deposit")
const rate = document.querySelector("#rate")
const years = document.querySelector("#years")
const btnGen = document.querySelector("#btn-gen")
let totalInterest = document.querySelector("#calculated-interest")
let totalDeposit = document.querySelector("#total-deposit")

btnGen.addEventListener("click", function(){
    let totalValueOfInterest = (deposit.value * rate.value * years.value) / 100
    let totalDepositValue = parseInt(totalValueOfInterest) + parseInt(deposit.value)
    deposit.value = " "
    rate.value = " "
    years.value = " "
    totalInterest.textContent = "Calculated Interest = $" + totalValueOfInterest
    totalDeposit.textContent = "Total Deposit = $" + totalDepositValue
})