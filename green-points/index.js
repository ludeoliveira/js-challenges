const pointsEl = document.getElementById("points-p")
const btnsContainer = document.getElementById("btns-container")

const actionsArr = [
 {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false
  }
]

let points = 0


function renderBtns(){
  // 1. Render buttons onto page
    for (let i = 0; i < actionsArr.length; i++) {
      const btn = document.createElement("button")
      btn.textContent = `${actionsArr[i].emoji} ${actionsArr[i].text}`
      btn.classList.add("btn", "btn-good")
      
      if(!actionsArr[i].good) {
        btn.classList.add("btn-bad")
      } 
      
      btn.addEventListener("click", function() { updatePoints(actionsArr[i]) })
      btnsContainer.appendChild(btn)
  }   
}
  
  // 2. Update points
   
function updatePoints(action) {
  if (action.good) {
    points += 5;
  } else {
    points -= 5;
  }
  
  pointsEl.textContent = `Total points: ${points}`
  
}

renderBtns()

