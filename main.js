import "./style.css";

const splashImg = document.querySelector(".hero-splash");

window.addEventListener("scroll", () => {
  const dist = window.scrollY;

  if (dist < 32) {
    splashImg.style.transform = `translateY(${dist / 8}px)`;
  }
});
