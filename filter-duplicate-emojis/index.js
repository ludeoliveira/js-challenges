document.getElementById("btn").addEventListener("click", filterDuplicates)
document.getElementById("sort-btn").addEventListener("click", sortByType)
document.getElementById("clear-btn").addEventListener("click", clear)

const emojis = [
    "๐","๐","๐","๐งก","๐",
    "๐ง","โก๏ธ","๐","๐ฑ","๐",
    "๐งก","๐ซ","๐","๐","โก๏ธ",
    "โก๏ธ","๐ถ","๐","๐","๐ฑ",
    "๐","๐ซ","๐","๐","๐",
    "โก๏ธ","๐","๐","๐ฑ","๐",
    "๐ซ","๐","๐","โก๏ธ","๐งก",
    "๐","๐","๐"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

// filter fuplicates emojis
function filterDuplicates() {
    let emojisFiltered = [...new Set(emojis)]
    for (let emoji of emojisFiltered) {  
    uniqueEmojisP.textContent += emoji
    }   
}

// sort emojis by type

function sortByType() {
    let emojisSorted = emojis.sort()
    for (let emoji of emojisSorted) {  
    uniqueEmojisP.textContent += emoji
    }     
}

// clear 
function clear() {
    uniqueEmojisP.textContent = ""
}