function phoneNav() {
  let hamburger = document.querySelector(".hamburger")
  let dropdown = document.querySelector(".nav-dropdown")

  hamburger.addEventListener("click", (e) => {
    // dropdown.classList.toggle("nav-dropdown")
    dropdown.classList.toggle("nav-dropdown-active")
  });
};

function colourMode() {
  let sun = document.querySelector(".sun-btn");
  let moon = document.querySelector(".moon-btn");
  let defaultColour = document.querySelectorAll(".default-colour");
  let bodyElement = document.querySelector("body");
  
  sun.addEventListener("click", e => {
    bodyElement.classList.toggle("body-change");
    sun.classList.toggle("color-mode-deactive");
    moon.classList.toggle("color-mode-deactive");

    for(let i = 0; i < defaultColour.length; i++) {
      defaultColour[i].classList.toggle("default-colour");
      defaultColour[i].classList.toggle("colour-mode");
    }
  })

  moon.addEventListener("click", e => {
    bodyElement.classList.toggle("body-change");
    sun.classList.toggle("color-mode-deactive");
    moon.classList.toggle("color-mode-deactive");

    for(let i = 0; i < defaultColour.length; i++) {
      defaultColour[i].classList.toggle("default-colour");
      defaultColour[i].classList.toggle("colour-mode");
    }
  })
};

function navigationDrop() {
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation ul a")
  let mode = document.querySelectorAll(".color-mode-btn")
  let name = document.querySelector(".s1-title");
  let quote = document.querySelector(".s1-text");
  let btn = document.querySelector(".s1-detail a div");

  window.addEventListener("load", e => {
    let navTween = new TimelineLite()

    if(name == null || quote == null || btn == null) {
      navTween
    .from(navigation, {duration: .45, y: "-125px", ease: "Power2.easeOut"})
    .from(links, {y: "-90px", opacity: 0, ease: "Back.easeOut", stagger: 0.2})
    .from(mode, {y: "-90px", opacity: 0, ease: "Back.easeOut"})
    } else{
      navTween
    .from(name, {duration: 0.70, x: "-100px", opacity: 0, ease: "Power2.easeOut"})
    .from(quote, {duration: 0.55, x: "-100px", opacity: 0, ease: "Power2.easeOut"})
    .from(btn, {duration: 0.40, x: "-100px", opacity: 0, ease: "Power2.easeOut"})
    .from(navigation, {duration: .55, y: "-125px", ease: "Power2.easeOut"})
    .from(links, {y: "-90px", opacity: 0, ease: "Back.easeOut", stagger: 0.2})
    .from(mode, {y: "-90px", opacity: 0, ease: "Back.easeOut"})
    }
  })
}

navigationDrop()
colourMode()
phoneNav()