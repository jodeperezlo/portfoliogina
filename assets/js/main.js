// ------------------------------------------------------------
// Navbar
// ------------------------------------------------------------
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navToggler = document.getElementById('navbar-toggler');
    const mainNav = document.getElementById('mainNav');
    // When we click on each nav__link, we remove the show-menu class
    navToggler.classList.add('collapsed');
    mainNav.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){            
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active');           
        }
        else{            
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ------------------------------------------------------------
// Portfolio
// ------------------------------------------------------------
const portfolio = document.querySelector('.sec-portfolio-js');
const modalImgPortfolio = document.querySelector('.img-modal-js');

portfolio.addEventListener('click', e => {
    if(e.target.classList.contains('img-btn-modal-js')){
        // SRC
        let urlImg = e.target.attributes[0].nodeValue;
        // Add modal
        modalImgPortfolio.src = urlImg;
    }
});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)