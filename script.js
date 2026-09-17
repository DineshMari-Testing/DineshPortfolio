document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );

    const navMenu =
        document.getElementById(
            "navMenu"
        );


    if (
        mobileMenuBtn &&
        navMenu
    ) {


        mobileMenuBtn.addEventListener(
            "click",
            () => {


                navMenu.classList.toggle(
                    "open"
                );


                const isOpen =
                    navMenu.classList.contains(
                        "open"
                    );


                mobileMenuBtn.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close menu"
                        : "Open menu"
                );


                const svg =
                    mobileMenuBtn.querySelector(
                        "svg"
                    );


                if (svg) {


                    if (isOpen) {

                        svg.innerHTML = `
                            <path d="M6 6l12 12"></path>
                            <path d="M18 6L6 18"></path>
                        `;

                    } else {

                        svg.innerHTML = `
                            <path d="M4 6h16"></path>
                            <path d="M4 12h16"></path>
                            <path d="M4 18h16"></path>
                        `;

                    }

                }

            }
        );


        document
            .querySelectorAll(".nav-link")
            .forEach(link => {


                link.addEventListener(
                    "click",
                    () => {


                        navMenu.classList.remove(
                            "open"
                        );


                        mobileMenuBtn.setAttribute(
                            "aria-label",
                            "Open menu"
                        );


                        const svg =
                            mobileMenuBtn
                                .querySelector(
                                    "svg"
                                );


                        if (svg) {

                            svg.innerHTML = `
                                <path d="M4 6h16"></path>
                                <path d="M4 12h16"></path>
                                <path d="M4 18h16"></path>
                            `;

                        }

                    }
                );

            });

    }



    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

    }


    if (themeToggle) {


        themeToggle.addEventListener(
            "click",
            () => {


                document.body.classList.toggle(
                    "dark"
                );


                const theme =
                    document.body.classList.contains(
                        "dark"
                    )
                        ? "dark"
                        : "light";


                localStorage.setItem(
                    "portfolio-theme",
                    theme
                );

            }
        );

    }



    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    const typingText =
        document.getElementById(
            "typingText"
        );


    if (typingText) {


        const words = [

            "QA Engineer",

            "Software Tester",

            "Automation Tester",

            "API Testing Enthusiast",

            "Quality-Focused Engineer"

        ];


        let wordIndex = 0;

        let charIndex = 0;

        let deleting = false;


        function typeEffect() {


            const currentWord =
                words[wordIndex];


            if (!deleting) {


                typingText.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );


                charIndex++;


                if (
                    charIndex ===
                    currentWord.length
                ) {


                    deleting = true;


                    setTimeout(
                        typeEffect,
                        1600
                    );


                    return;

                }

            } else {


                typingText.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );


                charIndex--;


                if (
                    charIndex === 0
                ) {


                    deleting = false;

                    wordIndex++;


                    if (
                        wordIndex >=
                        words.length
                    ) {

                        wordIndex = 0;

                    }

                }

            }


            const speed =
                deleting
                    ? 55
                    : 90;


            setTimeout(
                typeEffect,
                speed
            );

        }


        typeEffect();

    }



    /* =====================================================
       ANIMATED SKILL BARS
    ===================================================== */

    const skillProgressBars =
        document.querySelectorAll(
            ".skill-progress"
        );


    if (
        skillProgressBars.length
    ) {


        const skillObserver =
            new IntersectionObserver(
                entries => {


                    entries.forEach(
                        entry => {


                            if (
                                entry.isIntersecting
                            ) {


                                const bar =
                                    entry.target;


                                const targetWidth =
                                    bar.getAttribute(
                                        "data-width"
                                    );


                                bar.style.width =
                                    targetWidth;


                                skillObserver.unobserve(
                                    bar
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.25
                }
            );


        skillProgressBars.forEach(
            bar => {

                skillObserver.observe(
                    bar
                );

            }
        );

    }



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNav() {


        let current =
            "home";


        const scrollPosition =
            window.scrollY + 230;


        sections.forEach(
            section => {


                const sectionTop =
                    section.offsetTop;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    scrollPosition >=
                    sectionTop &&

                    scrollPosition <
                    sectionTop +
                    sectionHeight
                ) {


                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {


                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();



    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    const scrollTopBtn =
        document.getElementById(
            "scrollTop"
        );


    if (scrollTopBtn) {


        window.addEventListener(
            "scroll",
            () => {


                if (
                    window.scrollY >
                    500
                ) {

                    scrollTopBtn.classList.add(
                        "show"
                    );

                } else {

                    scrollTopBtn.classList.remove(
                        "show"
                    );

                }

            },
            {
                passive: true
            }
        );


        scrollTopBtn.addEventListener(
            "click",
            () => {


                window.scrollTo({

                    top:
                        0,

                    behavior:
                        "smooth"

                });

            }
        );

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


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


            if (
                event.key ===
                "Escape"
            ) {


                if (navMenu) {

                    navMenu.classList.remove(
                        "open"
                    );

                }


                if (mobileMenuBtn) {


                    mobileMenuBtn.setAttribute(
                        "aria-label",
                        "Open menu"
                    );


                    const svg =
                        mobileMenuBtn
                            .querySelector(
                                "svg"
                            );


                    if (svg) {

                        svg.innerHTML = `
                            <path d="M4 6h16"></path>
                            <path d="M4 12h16"></path>
                            <path d="M4 18h16"></path>
                        `;

                    }

                }

            }

        }
    );



    /* =====================================================
       CLICK OUTSIDE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "click",
        event => {


            if (
                !navMenu ||
                !mobileMenuBtn
            ) {

                return;

            }


            const clickedInsideMenu =
                navMenu.contains(
                    event.target
                );


            const clickedButton =
                mobileMenuBtn.contains(
                    event.target
                );


            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {


                navMenu.classList.remove(
                    "open"
                );


                mobileMenuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }
    );

});