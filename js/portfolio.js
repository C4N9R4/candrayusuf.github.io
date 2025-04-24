AOS.init({
  once: true,
});
//////////////////////////
document.addEventListener("DOMContentLoaded", function(){

const btnKirim = document.querySelector('btnKirim');
const btnLoading = document.querySelector('.btn-Loading');
const alertSucces = document.getElementById("thanks");
const form = document.querySelector('form');

form.addEventListener("submit", function(e){
    fetch(form.action,{
      method: 'POST',
      body: new FormData(form),

    })
      .then(response => {
        btnLoading.classList.add("d-none");
        btnKirim.classList.remove('d-none');
        alertSucces.classList.remove('d-none');
        form.reset();
      })
      .catch(error => console.error('Error:', error));
});
});
form.addEventListener("submit", function(e)  {
  btnLoading.classList.remove("d-none");
  btnKirim.classList.add("d-none");
})
/////////////////////////////
gsap.from(".jumbotron img ", {
  y: -200,
  duration: 1.5,
  ease: "bounce.out",
  opacity: 0,
});
gsap.from(".navbar", {
  duration: 2,
  ease: "back-out(1.7)",
  y: -300,
  opacity: 0,
});
gsap.from(".Myheading", {
  duration: 1,
  rotateY: 660,
  opacity: 0,
});
/////////////////////////////

//////Vanila javascript//////////
VanillaTilt.init(document.querySelectorAll(".tools-box"), {
  max: 30,
  speed: 300,
  glare: true,
});
