const body = document.body
const formSubmit = document.getElementById("form-submit")
const checkboxes = document.getElementsByClassName("checkbox")
const checkboxesContainer = document.getElementById("checkboxes-container")

document.querySelector('form').addEventListener('submit', (e) => {
    const data = Object.fromEntries(new FormData(e.target).entries())
    body.innerHTML = `<div class = "thank-you-note"><p><span>${data.name},</span> Thank you for your pledge!💜</p></div>`
})