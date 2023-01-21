let nav =document.querySelectorAll('nav')[0],
btns =document.querySelectorAll('.icon'),
content_nav = document.querySelector('.navTy'),
cre = document.getElementById('crex')

btns.forEach(el =>{
    el.addEventListener('click',()=>{
        nav.classList.toggle('active');
        content_nav.classList.toggle("active")
    })
})
cre.addEventListener("click",()=>{
    content_nav.classList.remove('active');
    nav.classList.remove('active');

})
