// Get elements
const img = document.querySelector('.main-img img');
const toggleText = document.querySelectorAll('.toggle-text');
const toggleBtn = document.querySelector('.toggle');
const icon = document.querySelector('.fa-regular');

// Toggle variable
let bool = true;

toggleBtn.addEventListener('click', () => {
    // toggle theme
    document.body.classList.toggle('light-theme');

    // if the page is in dark mode
    if (bool === true) 
    {
        // changing the images
        img.src = "./images/cup-light.png";

        // changing the icon of the page
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        bool = false;

        // changing text content
        toggleText.forEach(text => {
            text.innerHTML = "White";
        });

    }
    // else if the page is in light mode
    else
    {
        // Changing the image
        img.src = "/images/cup-dark.png";

        // changing icon of the page
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        bool = true;


        // changing text content
        toggleText.forEach(text => {
            text.innerHTML = "Black";
        });
    }
});