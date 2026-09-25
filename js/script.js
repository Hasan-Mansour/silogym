
const menuButton = document.querySelector("#menu-btn");
const navList = document.querySelector("nav ul");
console.log(menuButton);
console.log(navList);
menuButton.addEventListener("click", function () {
    console.log("the menu is on");
});
menuButton.addEventListener("click", function () {
    navList.classList.toggle("open")
    const isMenuopen = navList.classList.contains("open")
    if (isMenuopen) {
        menuButton.textContent = "x";
        menuButton.setAttribute("aria-label", "closed");
        menuButton.setAttribute("aria-expanded", "true");
    }
    else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "opend");
        menuButton.setAttribute("aria-expanded", "false");
    }
});


const navLinks = document.querySelectorAll("nav ul a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navList.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "opend");
        menuButton.setAttribute("aria-expanded", "false");

    });

});
const contactForm = document.querySelector("#contact-form");
const forMessage = document.querySelector("#form-message");
const trainerPhone = "963996181092";
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const namevalue = document.querySelector("#name").value.trim();
    const emailvalue = document.querySelector("#email").value.trim();
    const goalvalue = document.querySelector("#goal").value;
    const messagevalue = document.querySelector("#message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namevalue === " " ||
        emailvalue === "" || goalvalue === " " || messagevalue == " "
    ) {
        forMessage.textContent = "يرجى ملأ جميع الحقول"
        forMessage.classList.remove("success");
        forMessage.classList.add("errors");
        return;
    }
    if (!emailPattern.test(emailvalue)) {

        forMessage.textContent = "email is not available";
        forMessage.classList.remove("success");
        forMessage.classList.add("errors");
        return
    }
    // watsapp


    const watsappMessage = `SiloGym طلب جديد من موقع
name:${namevalue}
email:${emailvalue}
goal:${goalvalue}
plan:
message:${messagevalue}
`;
    const watsappUrl = `https://wa.me/${trainerPhone}?text=${encodeURIComponent(watsappMessage)}`;
    forMessage.textContent = `the order is done`;
    forMessage.classList.add("ssss");
    window.open(watsappUrl, "_blank")
});
// motion
const revealElements = document.querySelectorAll(".reveal");
const revealObserv = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")

        } else {
            entry.target.classList.remove("show")
        }
    });
});
revealElements.forEach(function (element) {
    revealObserv.observe(element);
});
// hiiiden
const preLoder = document.querySelector("#preloder");
window.addEventListener("load", function () {
    {
        preLoder.classList.add("hide")
    }
});
