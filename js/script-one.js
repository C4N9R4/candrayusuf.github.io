AOS.init();
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
