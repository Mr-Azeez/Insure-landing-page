let hamMenu = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenu.classList.toggle("fa-times")
});

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navBar.classList.remove("active")
        hamMenu.classList.toggle("fa-times")
    })
});
