let nav = document.querySelector('#nav');
let list = document.querySelector('.list');
let listUl = document.querySelector('.nav-div ul');
let listItem = document.querySelector('.list-item');
let menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    list.classList.toggle("list-item")
    menu.classList.toggle('cancel')
})


window.addEventListener('scroll',()=>{
    list.classList.remove("list-item")
    menu.classList.remove('cancel')
}
)

window.addEventListener('scroll', () => {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 200){
        console.log(scroll)
        nav.classList.add('active');
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('active');
        nav.classList.remove('fixed');
    }
})