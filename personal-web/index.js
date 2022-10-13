const toggle = document.getElementById("btn-toggle")

const menu = document.getElementById("list-menu")

console.log(toggle)
toggle.addEventListener("click", function() {
    if(menu.classList.contains("slide")) {
        menu.classList.remove("slide")
    }
    else{
        menu.classList.add("slide")
    }
})
