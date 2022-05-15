//scroll event listener
window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50 && !navLinks.classList.contains('active')) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }

    // toggles the classList to sticky when the scroll to Y is greater than 80px...
})

//toggle nav-link style when clicked on menu-btn

const navLinks = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // if(navLinks.classList.contains('active')){document.querySelector('header').classList.remove("sticky");}
    menuBtn.classList.toggle('animation');
})

const toggleTheme = document.querySelector('.light_dark_theme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(toggleTheme.classList.contains('fa-moon')){
        toggleTheme.classList.remove('fa-moon');
        toggleTheme.classList.add('fa-sun');
    }

    else {
        toggleTheme.classList.remove('fa-sun');
        toggleTheme.classList.add('fa-moon');
    }
});

// owl carousel script
$(document).ready(function() {
    $(".team_profiles").owlCarousel({
        margin: 20, // sets the margin of the '.profile' to 20px    
        loop: true,     // loop is activated
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
           0: {
               items: 1,    //only a team-mate is shown on the page
               nav: false
           }, 
           600: {
                items: 2,       //only 2 team-mates are shown
                nav: false
            }, 
            945: {
                items: 3,       
                nav: false
            } 
        }
    })
})