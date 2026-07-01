const siteHeader = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.textContent = navbar.classList.contains("active") ? "×" : "☰";
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

const revealElements = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("loading", "lazy");
});
