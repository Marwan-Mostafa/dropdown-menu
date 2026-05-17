// const btn = document.getElementById("btn")
// const menu = document.getElementById("menu")
// let icon = document.querySelector(".fa-solid")


// btn.addEventListener("click", function (){
//     menu.classList.toggle("active")
//     icon.classList.toggle("fa-bars")
//     icon.classList.toggle("fa-xmark")
// })


/* Dropmenu */

const link_drop = document.querySelector(".link-drop")
const sub_menu = document.querySelector(".sub-menu")

link_drop.addEventListener("click", function(){
    sub_menu.classList.toggle('show')
    link_drop.classList.toggle('active')
})