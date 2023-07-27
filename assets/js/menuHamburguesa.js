document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".wrapper__menutoggle");
    let aside = document.querySelector(".wrapper__aside");
  
    button.addEventListener("click", (event) => {
      let isVisible = aside.classList.contains("wrapper__aside--visible");
      if (!isVisible) {
        aside.classList.add("wrapper__aside--visible");
      } else {
        aside.classList.remove("wrapper__aside--visible");
      }
    });
  });