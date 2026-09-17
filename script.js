/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const icon = mobileMenuBtn.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            const icon = mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

function updateThemeIcon() {

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}


const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}

updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const theme =
            document.body.classList.contains("dark")
                ? "dark"
                : "light";

        localStorage.setItem("portfolio-theme", theme);

        updateThemeIcon();

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let current = "home";

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =====================================================
   SCROLL TO TOP
===================================================== */

const scrollTopBtn = document.getElementById("scrollTop");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });


    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =====================================================
   CLOSE MENU WITH ESC
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (navMenu) {

            navMenu.classList.remove("open");

        }

        if (mobileMenuBtn) {

            const icon = mobileMenuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});