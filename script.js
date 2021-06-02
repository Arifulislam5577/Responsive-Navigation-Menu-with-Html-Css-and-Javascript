let menuSlide = ()=>{
    let menu = document.querySelector('.menu')
    let burger = document.querySelector('.burger')

        burger.addEventListener('click' , ()=>{
            menu.classList.toggle('active')
            burger.classList.toggle('burgerLineToggle')
        })
}

menuSlide()