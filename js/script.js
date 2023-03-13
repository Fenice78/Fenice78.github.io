
window.onscroll = function () {
    let posizione = window.pageYOffset || document.documentElement.scrollTop;
    let elemento1 = document.getElementById("icon_heart");
    let elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posizione * 0.3 + "px";
    elemento2.style.top = posizione * 0.3 + "px";
}

document.getElementById("icon_menu").addEventListener("click", show_menu);

function show_menu(){

    document.querySelector(".menu").classList.toggle("show_menu");
    document.getElementById("menus").classList.toggle("change");
    
}

