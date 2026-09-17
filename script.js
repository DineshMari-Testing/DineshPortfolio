/* =========================================================
   MARI DINESH S - PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const isOpen = navMenu.classList.contains("open");

            mobileMenuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            const svg = mobileMenuBtn.querySelector("svg");

            if (svg) {

                if (isOpen) {

                    svg.innerHTML = `
                        <path d="M6 6l12 12M18 6L6 18"></path>
                    `;

                } else {

                    svg.innerHTML = `
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    `;

                }

            }

        });


        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                mobileMenuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                const svg = mobileMenuBtn.querySelector("svg");

                if (svg) {
                    svg.innerHTML = `
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    `;
                }

            });

        });

    }


    /* =====================================================
       DARK MODE
       ===================================================== */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }


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
            window.scrollY + 220;


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

            const href =
                link.getAttribute("href");

            if (href === "#" + current) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );

    updateActiveNav();


    /* =====================================================
       SCROLL TOP BUTTON
       ===================================================== */

    const scrollTopBtn =
        document.getElementById("scrollTop");


    if (scrollTopBtn) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    scrollTopBtn.classList.add("show");

                } else {

                    scrollTopBtn.classList.remove("show");

                }

            },
            { passive: true }
        );


        scrollTopBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

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

                if (mobileMenuBtn) {

                    mobileMenuBtn.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    const svg =
                        mobileMenuBtn.querySelector("svg");

                    if (svg) {

                        svg.innerHTML = `
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        `;

                    }

                }

            }

        }
    );


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (!navMenu || !mobileMenuBtn) {
                return;
            }

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedButton =
                mobileMenuBtn.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {

                navMenu.classList.remove("open");

            }

        }
    );

});