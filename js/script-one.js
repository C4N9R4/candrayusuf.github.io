AOS.init({
  once: true,
});
//////////////////////////
const scriptURL = "https://script.google.com/macros/s/AKfycbxlQcrWpCVIelk_bfnAzElACLyJXJk3FGncE67G0qhBgopQaPbeFtzF-ZP2QeAxC1My/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const alertForm = document.querySelector(".alert-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   when you click button submit
  //   display button loading , and then lost the button
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // display send button, lost loading button
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // display the alert
      alertForm.classList.toggle("d-none");
      // reset the form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
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
VanillaTilt.init(document.querySelectorAll(".tools-box")[0], {
  max: 30,
  speed: 300,
  glare: true,
});
VanillaTilt.init(document.querySelectorAll(".tools-box")[1], {
  max: 30,
  speed: 300,
  glare: true,
});
VanillaTilt.init(document.querySelectorAll(".tools-box")[2], {
  max: 30,
  speed: 300,
  glare: true,
});
