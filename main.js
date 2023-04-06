import "./style.css";

// animation
class Observer {
  constructor(showClass, hiddenClass) {
    this._showClass = showClass;
    this._hiddenClass = hiddenClass;
  }
  getHiddenElements() {
    const hiddenElements = document.querySelectorAll("." + this._hiddenClass);
    //console.log(hiddenElements);
    //returns arr of hidden elements
    return hiddenElements;
  }
  addObserver() {
    const hiddenElements = this.getHiddenElements();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(this._showClass);
          entry.target.classList.add(this._showClass);
        } else {
          // entry.target.classList.remove(this._showClass);
        }
      });
    });
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }
}

const mainImg = new Observer("img-show", "img-hidden");
mainImg.addObserver();

const title = new Observer("title-show", "title-hidden");
title.addObserver();

const services = new Observer("services-show", "services-hidden");
services.addObserver();

const contactBtnTrans = new Observer("contactBtn-show", "contactBtn-hidden");
contactBtnTrans.addObserver();

const date = new Date().getFullYear();
const footer = document.querySelector("footer");
footer.innerText += " " + date;

// comment form
const commentForm = document.querySelector(".section4__form");
commentForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log("click");
  const formData = new FormData(e.target);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
}
