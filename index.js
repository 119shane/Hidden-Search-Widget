const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

btn.addEventListener('click', ()=>{
    container.classList.toggle("active")
    input.foucus()
})