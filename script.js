// Responsive Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // keeps section visible under header
        behavior: "smooth"
      });
    }
    nav.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
