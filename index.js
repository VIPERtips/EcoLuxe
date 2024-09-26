document.querySelector(".curryear").innerHTML = new Date().getFullYear();
let sideMenu = document.getElementById('sideMenu');

      function openMenu(){
        sideMenu.style.right = "0";
      }

      function closeMenu(){
        sideMenu.style.right = "-200px";
      }


const scriptURL = 'https://script.google.com/macros/s/AKfycbw1StYlchKr6wwVWQrbi-WCi2Zo2TfVP_qqhR57BPUNZxCWMBRq88NzMb4IZQ34ee_y/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function(){
        msg.innerHTML = "";
      },5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})