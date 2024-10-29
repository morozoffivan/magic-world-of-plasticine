document.addEventListener("DOMContentLoaded", () => {
  const btnNavToggler = document.querySelector("#navToggler"),
        navbar = document.querySelector("#navbar"),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        imgsAboutSection = document.querySelectorAll('.carousel-image');

  function monitorChanger(width) {
    if (width < 1200) {
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

  let slideIndex = 1;

  function showImg(n) {
    if(n > imgsAboutSection.length){
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = imgsAboutSection.length;
    }

    imgsAboutSection.forEach(item => {
        item.classList.add('hidden');
    })

    imgsAboutSection[slideIndex - 1].classList.remove('hidden')
    imgsAboutSection[slideIndex - 1].classList.add('show-img', 'fade')
  }

  showImg(slideIndex)

  function changeImgs(n) {
    showImg(slideIndex += n);
  }

  prevBtn.addEventListener('click', () => {
    changeImgs(-1);
  })

  nextBtn.addEventListener('click', () => {
    changeImgs(1);
  })

  
});
