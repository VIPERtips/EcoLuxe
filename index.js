document.querySelector(".curryear").innerHTML = new Date().getFullYear();
let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.classList.add("is-open");
}

function closeMenu() {
  sideMenu.classList.remove("is-open");
}

sideMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const revealables = document.querySelectorAll(".reveal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("is-visible"));
}

const scriptURL = "https://script.google.com/macros/s/AKfycbw1StYlchKr6wwVWQrbi-WCi2Zo2TfVP_qqhR57BPUNZxCWMBRq88NzMb4IZQ34ee_y/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
}
