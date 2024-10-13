function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}


// dark mode

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");
const typingElements = document.getElementsByClassName("typedText");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    // Loop melalui semua elemen yang memiliki kelas "typedText"
    for (let i = 0; i < typingElements.length; i++) {
        typingElements[i].classList.toggle("dark");
    }
});


// typing effect

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Progaming", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

// scroolll animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

ScrollReveal().reveal('.project-card', {
    duration: 1700,
    distance: '50px',
    opacity: 0,
    origin: 'left',
    interval: 200,
    reset: true,
});



sr.reveal(".project-box", { setInterval: 200 });

sr.reveal(".top-header", {});


const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });
srLeft.reveal(".text-area", { delay: 230 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });
srRight.reveal(".input-field", { delay: 350 });


// active link

const sections = document.querySelector(".section[id]");

function scollActive() {
    const scrollY = window.scrollY;

    sections.fofEach((curent) => {

        const sectionHeight = curent.offsetHeight,

            sectionTop = curent.offsetTop - 50,
            sectionId = curent.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link")
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scollActive)

 // Initialize the map
 var map = L.map('map').setView([-6.1751, 106.8650], 13); 

 // Set up the OpenStreetMap layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: ''
 }).addTo(map);

 // Add a marker to the map
 var marker = L.marker([-6.1751, 106.8650]).addTo(map)
     .bindPopup('<b>My Location</b><br>This is where I am based.')
     .openPopup();
