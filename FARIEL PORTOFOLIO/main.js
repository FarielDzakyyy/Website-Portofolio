/*================ Toggle Icon navbar ===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    menuIcon.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = widow.scrrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links =>{
                links.classlist.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================ sticky navbar ===========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*================ remove toogle icon navbar ===========*/
    menuIcon.classList.remove('bi-x');
    navbar.classList.remove('active')
};

/*================ scroll reveall ===========*/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading' , { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .portofolio-container .portofolio h2 .contact .form' , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content h3 .services h2 .about-img .input-box',{ origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content h2 ', { origin: 'right' });
ScrollReveal().reveal('.about-content p, .about-content h3 ', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .about-content h3 ', { origin: 'bottom' });

/*================ typed js ===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Development', 'Web Designer', 'Frontend Development', 'Backend Development', 'Fullstack Development'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});