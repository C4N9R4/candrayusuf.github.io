AOS.init({
  once: true,
});
//////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {

  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.btn-loading');
  const form = document.querySelector('.form');

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Supaya tidak reload halaman
    
    // Tampilkan loading, sembunyikan tombol kirim
    btnLoading.classList.remove("d-none");
    btnKirim.classList.add("d-none");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => {
      
      btnLoading.classList.add("d-none");
      btnKirim.classList.remove("d-none");

      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        form.reset(); // Reset form setelah submit
      } else {
        alert("Gagal mengirim pesan.");
      }
    })
    .catch(error => {
      btnLoading.classList.add("d-none");
      btnKirim.classList.remove("d-none");
      alert("Terjadi kesalahan: " + error.message);
    });
  });
});
/////////////////////////////////////////////////////////////////
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
