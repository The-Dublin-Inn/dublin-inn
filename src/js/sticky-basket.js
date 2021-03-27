const elem = document.getElementById("basket");

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        window.pageYOffset > elem.offsetTop ?
            elem.classList.add("categories__basket--sticky") :
            elem.classList.remove("categories__basket--sticky")
    });
});