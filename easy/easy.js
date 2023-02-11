const burger = document.querySelector('#burgermenu');
const id = document.querySelector('#close');
const menu = document.querySelector('.menubar');
const body = document.querySelector('body')
const menulist = document.querySelectorAll('.menubar li');

const overlay = document.querySelector('.overlay')
burger.addEventListener('click', ()=>{
    burger.style.display= 'none';
    id.style.display= 'block';
    menu.classList.add("active");
    
   
    for( i = 0; i < document.querySelectorAll('.menubar li').length; i++){
        document.querySelectorAll('.menubar li')[i].classList.add("active");
    }
    setTimeout(function(){
        overlay.classList.add("active");
    },800)
})

id.addEventListener('click', ()=>{
    menu.classList.remove("active");
    burger.style.display= 'block';
    id.style.display= 'none'
    setTimeout(function(){
        overlay.classList.remove("active");
    },800)
    console.log('closed')

})