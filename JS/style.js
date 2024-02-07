// const wrapper = document.querySelector('.cards-wrapper');
// const dots = document.querySelectorAll('.dot');
// let activeDotNum = 0;
// dots.forEach((dot, idx) => {  
//   dot.setAttribute('data-num', idx);
//   dot.addEventListener('click', (e) => {
//     let clickedDotNum = e.target.dataset.num;
//     if(clickedDotNum == activeDotNum) {
//       return;
//     }
//     else {
//       let displayArea = wrapper.parentElement.clientWidth;
//       let pixels = -displayArea * clickedDotNum
//       wrapper.style.transform = 'translateX('+ pixels + 'px)';
//       dots[activeDotNum].classList.remove('active');
//       dots[clickedDotNum].classList.add('active');
//       activeDotNum = clickedDotNum;
//     }
    
//   });
// });
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else {
//             entry.target.classList.remove('show');
//         }
//     })
// })
// const hiddenElements = document.querySelectorAll('section');
// hiddenElements.forEach((el) => observer.observe(el)); wont fucking work
