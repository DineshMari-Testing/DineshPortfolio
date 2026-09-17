```javascript
// =====================================================
// MOBILE MENU
// =====================================================

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");


// Open menu

menuButton.addEventListener("click", function () {

    mobileMenu.classList.add("open");

    menuOverlay.classList.add("show");

    document.body.style.overflow = "hidden";

});


// Close menu

function closeMobileMenu() {

    mobileMenu.classList.remove("open");

    menuOverlay.classList.remove("show");

    document.body.style.overflow = "";

}


closeMenu.addEventListener("click", closeMobileMenu);

menuOverlay.addEventListener("click", closeMobileMenu);


// Close menu after clicking menu item

document.querySelectorAll(".mobile-menu a").forEach(function (link) {

    link.addEventListener("click", function () {

        closeMobileMenu();

    });

});



// =====================================================
// DESKTOP ACTIVE NAV
// =====================================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



// =====================================================
// SCROLL TOP BUTTON
// =====================================================

const scrollTop = document.getElementById("scrollTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// =====================================================
// CLOSE MOBILE MENU WITH ESC
// =====================================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeMobileMenu();

    }

});
```
