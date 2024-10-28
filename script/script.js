document.addEventListener('DOMContentLoaded', ()=> {
    const btnNavToggler = document.querySelector('#navToggler'),
          navbar = document.querySelector('#navbar');

    function monitorChanger(width){
        if(width < 1200) {
            console.log(width);
            navbar.classList.remove('flex-container-header');
            navbar.classList.add('hidden');
            btnNavToggler.classList.remove('hidden');
            btnNavToggler.classList.add('navbar-toggler');
        }
    }
    
    
    monitorChanger(window.innerWidth);
    
    
    btnNavToggler.addEventListener('click', ()=> {
        navbar.classList.remove('hidden')
        navbar.classList.add('show-nav');
    })
})
