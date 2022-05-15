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
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
           0: {
               items: 1,
               nav: false
           }, 
           600: {
                items: 2,
                nav: false
            }, 
            945: {
                items: 3,
                nav: false
            } 
        }
    })
})

//hover eventListener for services section..
const services = document.querySelector('.service_lists');
const servicesChildren = services.querySelectorAll('div');
console.log(servicesChildren)

servicesChildren.forEach(e => {
        
    e.addEventListener('mouseover', index => {
        let serviceSvgs = document.querySelector('.service_svgs');
        serviceSvgs.setAttribute('color', 'var(--primary-color)');
        serviceSvgs.style.transition = 'var(--transition)';
        console.log(element.target);
    })

    e.addEventListener('mouseout', () => {
        serviceSvgs.removeAttribute('color');
    })
})

// services.forEach(element => {
//     element.addEventListener('mouseover', () => {
//         serviceSvgs.setAttribute('color', 'red');
//     });
// });