// Ketika mengklik link di navbar kemudian akan scroll ke arah tujuannya, maka navbar tidak akan menutupi heading nya (ex: coba klik link destinasi pada navbar maka heading Destinasi tidak tertutup)
navigationHeight = document.querySelector(".navbar").offsetHeight;
document.documentElement.style.setProperty("--navbar__scroll", navigationHeight - 2 + "px");

// scroll keatas ketika mengklik logo pada navbar
document.querySelector(".nav__logo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// untuk mengatur menu toggle ketika mode mobile
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

// ketika mengklik salah satu link di dalam menu toggle diklik maka menu toggle akan ditutup.
function closeMenuToggle() {
  navLinks.classList.remove("active");
}
const menuLinks = document.querySelectorAll(".nav__links a");
menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenuToggle);
});

// memunculkan links ketika menu toggle diklik/active.
navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
