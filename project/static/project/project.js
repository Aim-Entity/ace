function alternate(){
  let projects = document.querySelectorAll(".project");

  for(let i = 0; i < projects.length; i++) {

    if((i % 2) == 1){
      projects[i].classList.toggle("project")
      projects[i].classList.toggle("project-flip")

      projects[i].children[0].classList.toggle("p-left")
      projects[i].children[0].classList.toggle("left-push-back")
    }
  }
};

function shrink() {
  if(window.innerWidth >= 1000) {
    let thumbnail = document.querySelectorAll(".project-thumbnail");

    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].addEventListener("mouseenter", e => {
        gsap.to(e.target, {duration: 0.5, width: "680px", x: "-25px", ease: "Power2.easeOut"})
      });

      thumbnail[i].addEventListener("mouseout", e => {
        gsap.to(e.target, {duration: 0.5, width: "830px", x: "25px", ease: "Power2.easeOut"})
      })
    }
  }
}

shrink()
alternate()