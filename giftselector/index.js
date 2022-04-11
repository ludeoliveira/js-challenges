document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
let alertText = document.getElementById("alert")


function calculate() {
    let foodOption = document.getElementById("food-select")
    let foodCost = parseInt(foodOption.options[foodOption.selectedIndex].value)
    let transpOption = document.getElementById("transport-select")
    let transpCost = parseInt(transpOption.options[transpOption.selectedIndex].value)
    if (foodCost && transpCost) {
        costEl.innerText = "$" + (foodCost + transpCost)
        alertText.innerHTML = ""
    } else {
        alertText.innerHTML = "🚨 Hey! Please make sure you have selected all of the options above."
        costEl.innerHTML = ""
    }
}