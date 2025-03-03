/* Mobile Menu */
const btn = document.getElementById('menu-btn')
const showcase = document.getElementById('showcase')
const menu = document.getElementById('menu')
const choice = document.getElementById('coaching-container')
const coaching = document.getElementById('coaching')
const coaching2 = document.getElementById('coaching2')
const coaching3 = document.getElementById('coaching3')
const coachbtn = document.getElementById('coaching-x')

function navToggle() {
    btn.classList.toggle('open')
    showcase.classList.toggle('open')
    menu.classList.toggle('open')
}

btn.addEventListener('click', navToggle)

function coachingToggle(){
    choice.classList.toggle('view')
}

coaching.addEventListener('click', coachingToggle)
coachbtn.addEventListener('click', coachingToggle)
coaching2.addEventListener('click', coachingToggle)
coaching3.addEventListener('click', coachingToggle)

// Loader

const home = document.getElementById("home");

function init() {
    setTimeout(() => (btn.style.opacity = 1), 2200);
    setTimeout(() => {
      setTimeout(() => (home.style.opacity = 1), 50);
    }, 600);
  }

  init();

  // Slider

  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  const auto = true;
  const intervalTime = 5000;
  let slideInterval;

  const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling){
      // Add current to next sibling
      current.nextElementSibling.classList.add('current');
    }else {
      // Add current to start
      slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
  }

  const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling){
      // Add current to prev sibling
      current.previousElementSibling.classList.add('current');
    }else {
      // Add current to last 
      slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
  }

  // Button Events
  next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  })

  prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(prevSlide, intervalTime);
    }
  })

  // Auto slide
  if(auto){
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }


   // Contact Form 

   const inputs = document.querySelectorAll(".input");

   function focusFunc(){
     let parent = this.parentNode;
     parent.classList.add("focus");
   }

   function blurFunc(){
     let parent = this.parentNode;
     if(this.value == ""){
      parent.classList.remove("focus");
     }
   }

   inputs.forEach((input) => {
     input.addEventListener("focus", focusFunc);
     input.addEventListener("blur", blurFunc);
   });

