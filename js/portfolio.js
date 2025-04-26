AOS.init({
  once: true,
});
//////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {//tunggu semua element HTML siap dulu
  const btnkirim = document.querySelector('.btn-kirim');//ambil tombol kirim, tombol loading, dan form kedalam variabel
  const textKirim = document.querySelector('.text-kirim');
const spinner = btnKirim.querySelector('.spinner-grow');

  //ketika form disubmit
  form.addEventListener("submit", async function(e){
    e.preventDefault();//agar form tidak reload otomatis, tampilkan loading sembunyikan tombol kirim 
   
  // Tampilkan spinner, sembunyikan text
  textKirim.classList.add("d-none");
  spinner.classList.remove("d-none");
    //////////////////////////////
    try{
      const response = await fetch('https://formsubmit.co/98candrayusuf@gmail.com', {
        method: 'POST',
        body: new FormData(form)
      });
    //Setelah kirim, kembalikan tombol seperti semula
    textKirim.classList.remove("d-none");
    spinner.classList.add("d-none");

    if (response.ok){
      alert("Pesan berhasil dikirim!");
      form.reset();//kosongkan semua input
    }else{
      alert('Gagal mengirim pesan');
    }
    }catch(error){
      //kalau error misal internet putus
      textKirim.classList.remove("d-none");
    spinner.classList.add("d-none");
      alert("Terjadi kesalahan: " + error.message);
    }
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
