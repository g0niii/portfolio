document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".wrapper__menutoggle");
    let icon_bars = document.querySelector(".wrapper__menutoggle .fa-bars");
    let icon_xmark = document.querySelector(".wrapper__menutoggle .fa-xmark");
    let aside = document.querySelector(".wrapper__aside");
  
    button.addEventListener("click", (event) => {
      let isVisible = aside.classList.contains("wrapper__aside--visible");
      if (!isVisible) {
        aside.classList.add("wrapper__aside--visible");
        icon_bars.style.opacity=0;
        icon_xmark.style.opacity=1;
      } else {
        aside.classList.remove("wrapper__aside--visible");
        icon_bars.style.opacity=1;
        icon_xmark.style.opacity=0;
      }
    });
    window.addEventListener("resize", ()=>{
        let size = parseInt(document.body.clientWidth);
        if(size<=1080){
            aside.classList.remove("wrapper__aside--visible");
            icon_bars.style.opacity=1;
            icon_xmark.style.opacity=0;
        }
    })
  });


