/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav_toggle'),
        navClose = document.getElementById('nav-close');

// show menu
if(navToggle){
    // console.log(navClose);
    
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// hidden menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
const changeGbHeader = () =>{
    const header = document.getElementById("header");
    // console.log(this.scrollY);
    if (this.scrollY >= 50) {
        // console.log(this.scrollY);
        
        header.classList.add('bg-header')
    }else {
        header.classList.remove('bg-header')
    }
}

window.addEventListener("scroll", changeGbHeader)
changeGbHeader()

/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.service__swiper', {
    // https://swiperjs.com/swiper-api#parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//   const x = 8;
//   const total = 5;
//   console.log((x - 1 + total) % total);
  
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    // console.log(this.scrollY);
    
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is high then 350 viewport height, and the show-scroll class to the a tag with the scroll
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);
scrollUp();

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/

