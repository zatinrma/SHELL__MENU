function show_hide_static_menu() {
    var static_menu = document.getElementById("static_menu");
    var btn_static_menu = document.getElementById("btn_static_menu");
    if (static_menu.style.display === "none") {
        static_menu.style.display = "block";
        btn_static_menu.innerText = 'Hide Static Menu'
    } else {
        static_menu.style.display = "none";
        btn_static_menu.innerText = 'Show Static Menu'
    }
}

function show_hide_immediate_change_menu() {
    var immediate_menu_change = document.getElementById("immediate_menu_change");
    var btn_immediate_menu_change = document.getElementById("btn_immediate_menu_change");
    if (immediate_menu_change.style.display === "none") {
        immediate_menu_change.style.display = "block"
        btn_immediate_menu_change.innerText = "Hide 3 Seconds Menu"
    } else {
        immediate_menu_change.style.display = "none";
        btn_immediate_menu_change.innerText = "Show 3 Seconds Menu"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Auto Change the Image with White Light Fade In Out 
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 8000); // Change image every 2 seconds
    }

    // Code inside this function will run after the DOM has been fully loaded
    let image_1 = document.getElementById('slide_img_1');
    let image_2 = document.getElementById('slide_img_2');
    let images = [
        './Image/shell (2).jpg',
        './Image/shell (3).jpg',
        './Image/shell (4).jpg',
        './Image/shell (5).jpg',
        './Image/shell (6).jpg',
        './Image/shell (7).jpg',
        './Image/shell (8).jpg',
        './Image/shell (9).jpg',
        './Image/shell (10).jpg',
        './Image/shell (11).jpg',
        './Image/shell (12).jpg',
        './Image/shell (13).jpg',
        './Image/shell (14).jpg',
    ]
    function random_interval() {
        let random_1 = Math.floor(Math.random() * 12);  // Java Script List has quantity 13 file starting in list from 0 - 12
        let random_2 = random_1
        if (random_1 == 13) {
            random_2 = random_1 - 1
        }
        else {
            random_2 = random_1 + 1
        }
        image_1.src = images[random_1];
        image_2.src = images[random_2];
    }
    setInterval(random_interval, 3000)
});

