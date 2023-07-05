paceOptions = {
    ajax: true, // Checks AJAX requests
    document: true // Document is ready
}

Pace.on('done', () => {
    gsap.timeline()
    .add('p')
    .to('.pace', {
        transform: 'scale(10, 1)',
        duration: 4,
        ease: Expo.easeInOut
    })
    .to('.pace', {
        duration: 1,
        height: "100%"
    }, "-=2.3")
    .to('.loading__text', {
        delay: 0.2,
        duration: .5,
        opacity: 0,
        yPercent: 100,
        ease: "BezierEasing(0.19,1,0.22,1)"
    }, "p")
    .to('.title', {
        duration: 2,
        delay: .3,
        opacity: 1,
        ease: Expo.easeInOut
    }, "-=2.3")
    .to('.front-page', {
        duration: 2,
        delay: .3,
        opacity: 1,
        ease: Expo.easeInOut
    }, "-=2.3")
    .to('.header', {
        duration: 2,
        delay: .3,
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut
    }, "-=2.3")
    .to('.home', {
        duration: 2,
        delay: .9,
        x: 0,
        opacity: 1,
        ease: Expo.easeInOut
    }, "-=2.3")
    .to('.home__title', {
        duration: 2.5,
        delay: .5,
        y: 0,
        ease: Expo.easeInOut
    }, "-=2.9")
    .to('.home__subtitle', {
        duration: 2.5,
        delay: .5,
        y: 0,
        ease: Expo.easeInOut
    }, "-=2.9")
    .to('.home__description', {
        duration: 2.5,
        delay: .5,
        y: 0,
        ease: Expo.easeInOut
    }, "-=2.9")
    .to('.button', {
        duration: 2.5,
        delay: .5,
        y: 0,
        scale: 1.05,
        ease: Expo.easeInOut
    }, "-=2.9")
    .to('.home__scroll', {
        duration: 2.5,
        delay: 2.5,
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut
    }, "-=2.9")
})

































let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".front-page",
        start: "0%",
        end: "100%",
        scrub: true,
        pin: true,
    },
});

tl.fromTo(".front-page", { clipPath: "circle(4%)" }, { clipPath: "circle(75%)", duration: 3 });

tl.fromTo(".exc__img", { scale: 1 }, { scale: 0, opacity: 0, duration: 1 }, "-=3");

tl.fromTo(".ftitle", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".sub-title", { opacity: 0 }, { opacity: 1, duration: 1 });














































/*=======================  Menu Show Y Hidden  =======================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===========  Menu show  ===========*/
/*  Validate if constant exists  */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===========  Menu hidden  ===========*/
/*  Validate if constant exists  */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=======================  Remove Menu Mobile  =======================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=======================  Scroll Sections Active Link  =======================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=======================  Scroll Animation  =======================*/
var animaion = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_4pnrkf3w.json'// lotie file path
})