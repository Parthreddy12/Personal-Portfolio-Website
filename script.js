// ===== SINGLE PAGE SCROLL ACTIVE NAVBAR (NAV FIXED) =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const nav = document.querySelector("nav"); // select your navbar
const navHeight = nav.offsetHeight;       // get navbar height

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight; // subtract nav height
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
