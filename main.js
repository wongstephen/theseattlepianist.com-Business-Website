import "./style.css";

class Observer {
  constructor(showClass, hiddenClass) {
    this._showClass = showClass;
    this._hiddenClass = hiddenClass;
  }
  getHiddenElements() {
    const hiddenElements = document.querySelectorAll("." + this._hiddenClass);
    console.log(hiddenElements);
    //returns arr of hidden elements
    return hiddenElements;
  }
  addObserver() {
    const hiddenElements = this.getHiddenElements();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  test() {
    console.log("hi");
  }
}

const mainImg = new Observer("show-bottom", "hidden-bottom");
mainImg.addObserver();

// const title = new Observer("show-title", "hidden-title");
// title.addObserver();

const date = new Date().getFullYear();
const footer = document.querySelector("footer");
footer.innerText += " " + date;
