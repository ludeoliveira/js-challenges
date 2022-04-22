const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10]
const reusableCupDiscount = 0.5
const coffeePrice = 3
const dailySavings = document.getElementById("daily-savings")
let savingsPerDayArr = []
let savingsPerWeekArr = []
let totalSavings = document.getElementById("total-p")
    
    for (let value of coffeesPerDay) {
      let savingPerDay = value * reusableCupDiscount
      let savingformated = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
      }).format(savingPerDay)
      let day = coffeesPerDay.indexOf(value) + 1
      savingsPerDayArr.push(`<p>Day ${day}: <span>${savingformated}</span></p>`)
      dailySavings.innerHTML = savingsPerDayArr.join('')
      
      // savings per week
      savingsPerWeekArr.push(savingPerDay)
      let sumWeek = 0
        for (let i = 0; i < savingsPerWeekArr.length; i++) {
          sumWeek += savingsPerWeekArr[i];
      }
      let savingformatedWeek = new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
      }).format(sumWeek)
      totalSavings.textContent = `total savings: ${savingformatedWeek}`
    
      } 