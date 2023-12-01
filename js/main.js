window.addEventListener('scroll',() => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky",window.scrollY>50);
});

const togglebar =  document.querySelector('.toggle');
const menu =document.querySelector('ul')

 let navToggle = () => {
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");
}