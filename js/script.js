function mouseOver(element)
{
    element.style.color= 'Green' ;
} 


const navToggle = document.getElementById('nav-mobile');
const navbar = document.querySelector('.navbar');

// Add event listener to toggle the navbar visibility
navToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
});




