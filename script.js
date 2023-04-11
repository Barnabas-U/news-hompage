const mobileMenu = document.querySelector('.mobile-menu');
const menuBar = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const stopScrolling = document.querySelector('.stop-scrolling');
const body = document.querySelector('.body');

menuBar.addEventListener("click", (e) => {
    if (menuBar.style.display = "block") {
        mobileMenu.style.display = "block";
        body.className = 'stop-scrolling';
    }
});

closeIcon.addEventListener("click", (e) => {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
        body.className= "start-scrolling";
    }
})