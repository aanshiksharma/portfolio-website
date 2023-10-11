const navbarToggler = document.querySelectorAll(".navbarToggler");
const navbar = document.querySelector(".navbar");

Array.from(navbarToggler).forEach((button) => {
  button.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
  });
});

// Setting column gap in the footer
const footerBottom = document.querySelector(".footer-bottom");
const footerAuthor = document.querySelector(".author");
const footerSocialMediaLinks = document.querySelector(".social-media-links");
footerBottom.style.columnGap = `calc(100% - ${footerAuthor.offsetWidth}px - ${footerSocialMediaLinks.offsetWidth}px)`;
