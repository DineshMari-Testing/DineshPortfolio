/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.getElementById("navMenu");

const menuIcon =
    document.getElementById("menuIcon");


if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {

            menuIcon.innerHTML = `
                <path d="M6 6l12 12"/>
                <path d="M18 6 6 18"/>
            `;

        } else {

            menuIcon.innerHTML = `
                <path d="M4 7h16"/>
                <path d="M4 12h16"/>
                <path d="M4 17h16"/>
            `;

        }

    });


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuIcon.innerHTML = `
                    <path d="M4 7h16"/>
                    <path d="M4 12h16"/>
                    <path d="M4 17h16"/>
                `;

            });

        });

}


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const moonIcon =
    document.getElementById("moonIcon");


function updateThemeIcon() {

    if (!themeToggle) return;

    if (document.body.classList.contains("dark")) {

        moonIcon.innerHTML = `
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.9 4.9 1.4 1.4"/>
            <path d="m17.7 17.7 1.4 1.4"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m4.9 19.1 1.4-1.4"/>
            <path d="m17.7 6.3 1.4-1.4"/>
        `;

    } else {

        moonIcon.innerHTML = `
            <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4
                     A8.5 8.5 0 1 0 20 15.5Z"/>
        `;

    }

}


const savedTheme =
    localStorage.getItem("portfolio-theme");


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

        localStorage.setItem(
            "portfolio-theme",
            theme
        );

        updateThemeIcon();

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let current = "home";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =====================================================
   SCROLL TOP
===================================================== */

const scrollTopBtn =
    document.getElementById("scrollTop");


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

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            if (navMenu) {
                navMenu.classList.remove("open");
            }

            if (menuIcon) {

                menuIcon.innerHTML = `
                    <path d="M4 7h16"/>
                    <path d="M4 12h16"/>
                    <path d="M4 17h16"/>
                `;

            }

        }

    }
);/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navMenu =
    document.getElementById("navMenu");

const menuIcon =
    document.getElementById("menuIcon");


if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {

            menuIcon.innerHTML = `
                <path d="M6 6l12 12"/>
                <path d="M18 6 6 18"/>
            `;

        } else {

            menuIcon.innerHTML = `
                <path d="M4 7h16"/>
                <path d="M4 12h16"/>
                <path d="M4 17h16"/>
            `;

        }

    });


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                menuIcon.innerHTML = `
                    <path d="M4 7h16"/>
                    <path d="M4 12h16"/>
                    <path d="M4 17h16"/>
                `;

            });

        });

}


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const moonIcon =
    document.getElementById("moonIcon");


function updateThemeIcon() {

    if (!themeToggle) return;

    if (document.body.classList.contains("dark")) {

        moonIcon.innerHTML = `
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.9 4.9 1.4 1.4"/>
            <path d="m17.7 17.7 1.4 1.4"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m4.9 19.1 1.4-1.4"/>
            <path d="m17.7 6.3 1.4-1.4"/>
        `;

    } else {

        moonIcon.innerHTML = `
            <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4
                     A8.5 8.5 0 1 0 20 15.5Z"/>
        `;

    }

}


const savedTheme =
    localStorage.getItem("portfolio-theme");


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

        localStorage.setItem(
            "portfolio-theme",
            theme
        );

        updateThemeIcon();

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let current = "home";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =====================================================
   SCROLL TOP
===================================================== */

const scrollTopBtn =
    document.getElementById("scrollTop");


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

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            if (navMenu) {
                navMenu.classList.remove("open");
            }

            if (menuIcon) {

                menuIcon.innerHTML = `
                    <path d="M4 7h16"/>
                    <path d="M4 12h16"/>
                    <path d="M4 17h16"/>
                `;

            }

        }

    }
);