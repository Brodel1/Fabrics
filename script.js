
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION BAR <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

const navbar = document.querySelector("nav");


window.addEventListener('scroll', () => {
    if(window.scrollY >= 1900) {
        navbar.classList.add('active-nav');
    } else {
        navbar.classList.remove('active-nav'); 
    }
})

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAVIGATION BAR PROGRES<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */


const scrollProgress = document.querySelector(".navbar-scroll-progresion");

function scrollProgresion() {
    const heightOfPage = document.body.scrollHeight;
    const distanceFromTop = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage = (distanceFromTop / (heightOfPage - windowHeight)) * 100;
    
    scrollProgress.style.width = Math.round(scrolledPercentage) + "%";
}



document.addEventListener('scroll', scrollProgresion);

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> POP UP <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */


const buttonOpen = document.querySelector(".submission-button");
const popupContainer = document.querySelector(".submission-popup");
const closePopup = document.querySelector(".close-popup");
const sent = document.querySelector(".popup-button");

buttonOpen.addEventListener("click", () => {
    popupContainer.classList.remove("active");
})

closePopup.addEventListener("click", () => {
    popupContainer.classList.add("active");
})

sent.addEventListener("click", () => {
    popupContainer.classList.add("active");
})


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> HERO BACKGROUND <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */


const backgroundImage = document.getElementById("mainpage-background-image");

window.addEventListener("scroll", () => {
    updateImage()
})

function updateImage(){
    backgroundImage.style.opacity = 1 - window.pageYOffset / 6000;
    backgroundImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FABRICS <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

const cottonTitle = document.querySelector(".fabrics-cotton-title");
const cottonText = document.querySelector(".fabrics-cotton-text");

cottonTitle.addEventListener("click", () => {
    cottonText.classList.add("live");
})
cottonText.addEventListener("click", () => {
    cottonText.classList.remove("live");
})

const rayonTitle = document.querySelector(".fabrics-rayon-title");
const rayonText = document.querySelector(".fabrics-rayon-text");

rayonTitle.addEventListener("click", () => {
    rayonText.classList.add("live");
})
rayonText.addEventListener("click", () => {
    rayonText.classList.remove("live");
})

const denimTitle = document.querySelector(".fabrics-denim-title");
const denimText = document.querySelector(".fabrics-denim-text");

denimTitle.addEventListener("click", () => {
    denimText.classList.add("live");
})
denimText.addEventListener("click", () => {
    denimText.classList.remove("live");
})

const gauzeTitle = document.querySelector(".fabrics-gauze-title");
const gauzeText = document.querySelector(".fabrics-gauze-text");

gauzeTitle.addEventListener("click", () => {
    gauzeText.classList.add("live");
})
gauzeText.addEventListener("click", () => {
    gauzeText.classList.remove("live");
})

const woolTitle = document.querySelector(".fabrics-wool-title");
const woolText = document.querySelector(".fabrics-wool-text");

woolTitle.addEventListener("click", () => {
    woolText.classList.add("live");
})
woolText.addEventListener("click", () => {
    woolText.classList.remove("live");
})