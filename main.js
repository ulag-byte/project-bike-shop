const btnToggle = document.querySelector(".card_2");
const navBar = document.querySelector(".navbar-links");
const navBarClose = document.querySelector(".close-navbar");
const navBarLink = document.querySelectorAll(".link-a");

btnToggle.addEventListener("click", function(){
    navBar.style.display = "block";
    navBar.style.right = "0";
    btnToggle.style.marginRight = "450px";
    buyCont.style.right = "550px";
})

navBarClose.addEventListener("click", function(){
    navBar.style.display = "none";
    btnToggle.style.marginRight = "75px";
    buyCont.style.right = "165px";
})

navBarLink.forEach( navBarLink => navBarLink.addEventListener("click", function(){
    navBar.style.display = "none";
    btnToggle.style.marginRight = "75px";
}))





