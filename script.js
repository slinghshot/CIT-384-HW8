function myFunction() {
    var links = document.getElementById("myLinks");
    var xmark = document.getElementById("xmark");
    var burger = document.getElementById("burger");
    if (links.style.display === "block") {
        links.style.display = "none";
        xmark.style.display = "none";
        burger.style.display = "block";
    } else {
        links.style.display = "block";
        xmark.style.display = "block";
        burger.style.display = "none";
    }
}
function menu() {
    var navLinks = document.getElementById("myLinks")
    var xmark = document.getElementById("xmark");
    var burger = document.getElementById("burger");
    if (innerWidth >= 1035) {
        navLinks.style.display = "block";
        xmark.style.display = "none";
        burger.style.display = "none";
    }
    else if (innerWidth <= 1034) {
        navLinks.style.display = "none";
        xmark.style.display = "none";
        burger.style.display = "block";

    }
}
window.addEventListener('resize', menu);