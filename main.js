const btn = document.getElementById("btn")
const menu = document.getElementById("menu")
let icon = document.querySelector(".fa-solid")


btn.addEventListener("click", function (){
    menu.classList.toggle("active")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")
})