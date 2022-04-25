//scroll event listener
window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
    ; // toggles the classList to sticky when the scroll to Y is greater than 80px...
})

//toggle nav-link style when clicked on menu-btn

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('animation');
})