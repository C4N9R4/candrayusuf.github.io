AOS.init({
  once: true,
});
//////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {//tunggu semua element HTML siap dulu
  const btnkirim = document.querySelector('.btn-kirim');//ambil tombol kirim, tombol loading, dan form kedalam variabel
  const btnLoading = document.querySelector('.btn-loading');
  const form = document.getElementById('form');

  //ketika form disubmit
  form.addEventListener("submit", async function(e){
    e.preventDefault();//agar form tidak reload otomatis, tampilkan loading sembunyikan tombol kirim 
    btnLoading.classList.remove("d-none");
    btnkirim.classList.add("none");
    //////////////////////////////
    try{
      const response = await fetch('https://formsubmit.co/98candrayusuf@gmail.com', {
        method: 'POST',
        body: new FormData(form)
      });
    //Setelah kirim, kembalikan tombol seperti semula
    btnLoading.classList.add('d-none');
    btnkirim.classList.remove('d-none');

    if (response.ok){
      alert("Pesan berhasil dikirim!");
      form.reset();//kosongkan semua input
    }else{
      alert('Gagal mengirim pesan');
    }
    }catch(error){
      //kalau error misal internet putus
      btnLoading.classList.add('d-none');
      btnKirim.classList.remove('d-none');
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
