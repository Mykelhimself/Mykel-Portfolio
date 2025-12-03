const collapse = document.querySelector('.coll-icon');
const sideBar = document.querySelector('.sidebar')
const hero = document.querySelector('.hero')


collapse.addEventListener('click', ()=> {
    sideBar.classList.toggle('active')
    collapse.classList.toggle('active')
});
const collapseText = document.querySelectorAll('.collapse-text');
const collapseCont = document.querySelectorAll('.open-collapse') 

collapseCont.forEach((button, index) => {
    button.addEventListener('click', ()=> {
    collapseText[index].classList.toggle('active')
    button.classList.toggle('open');
});
})

// document.addEventListener('DOMContentLoaded', () => {
    
// })
