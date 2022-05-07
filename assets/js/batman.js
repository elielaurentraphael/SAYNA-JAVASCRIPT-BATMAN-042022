let menu = document.querySelectorAll("a");

console.log(menu);
menu.forEach(function(a) {
    a.addEventListener("mouseover", () => {
        a.style.textDecoration = "underline";
        a.style.fontWeight = "bold";
    })
    a.addEventListener("mouseout", () => {
        a.style.textDecoration = "none";
        a.style.fontWeight = "normal";
    })
})