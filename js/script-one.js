AOS.init({
  once: true,
});
//////////////////////////
// let prf = {
//   pf1 = "Saya Candra Yusuf Irawan Lulusan Sarjana Komputer Universitas Borobudur jakarta tahun 2022. Memiliki kemampuan dalam membuat tampilan depan website menggunakan HTML, CSS, dan javascript dengan framework bootstrap. Selain sayamampu membuat website, saya juga memiliki pengetahuan dalam menggunakan sofware corelDraw dan AdobePhotoshop.";
// };
// document.getElementById("#paraf").innerHTML = prf.pf1;
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
VanillaTilt.init(document.querySelectorAll(".tools-box"), {
  max: 30,
  speed: 300,
  glare: true,
});
