document.addEventListener("DOMContentLoaded", () => {
  const btnNavToggler = document.querySelector("#navToggler"),
        navbar = document.querySelector("#navbar");

  function monitorChanger(width) {
    if (width < 1200) {
      console.log(width);
      navbar.classList.remove("flex-container-header");
      navbar.classList.add("hidden");
      btnNavToggler.classList.remove("hidden");
      btnNavToggler.classList.add("navbar-toggler");
    }
  }

  function onOpenNav(btnToggler, bar){
    btnToggler.addEventListener("click", () => {
        if (bar.className === "hidden") {
          bar.classList.remove("hidden");
          bar.classList.add("show-nav");
        } else {
            bar.classList.add("hidden");
            bar.classList.remove("show-nav");
        }
      });
  }

  monitorChanger(window.innerWidth);
  onOpenNav(btnNavToggler, navbar);
  
});
