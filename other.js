/* Mobile Menu */
const btn = document.getElementById('menu-btn')
const showcase = document.getElementById('showcase')
const menu = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    showcase.classList.toggle('open')
    menu.classList.toggle('open')
    
}

btn.addEventListener('click', navToggle)

// Loader

const home = document.getElementById("home");

function init() {
    setTimeout(() => (btn.style.opacity = 1), 2200);
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


const choice = document.getElementById('coaching-container')
const coaching = document.getElementById('coaching')
const coachbtn = document.getElementById('coaching-x')

function coachingToggle(){
  choice.classList.toggle('view')
}

coaching.addEventListener('click', coachingToggle)
coachbtn.addEventListener('click', coachingToggle)

