document.getElementById("btn").addEventListener("click", correct)
document.getElementById("btn-clear").addEventListener("click", clear)
document.getElementById('execCopy').addEventListener('click', execCopy);

function correct() {  
// grabbing the value of the input text
  let inputText = document.getElementById("recipient-input")
  let inputString = inputText.value
  
//   transform the string to an array
  const arr = inputString.split(" ") 
  
//   iterate through array and capitalize each array element
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
}
  
// join the elements back into string and add it to the DOM
  const newString = arr.join(" ")
  document.getElementById("recipient-input").value = newString
    
}

// copy button

function execCopy() {
  document.querySelector("#recipient-input").select();
  document.execCommand("copy");
}

// clear button

function clear() {
  document.getElementById("recipient-input").value = ""  
}
