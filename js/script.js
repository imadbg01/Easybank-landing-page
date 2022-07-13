const mobileToggle = document.querySelector(".mobile-navigation-toggle");

const navLinks = document.querySelector(".nav-links");

mobileToggle.addEventListener("click", () => {
  const visible = navLinks.getAttribute("data-visible");

  if (visible === "false") {
    navLinks.setAttribute("data-visible", "true");
    mobileToggle.setAttribute("aria-expanded", "true");
  } else {
    navLinks.setAttribute("data-visible", "false");
    mobileToggle.setAttribute("aria-expanded", "false");
  }
});

let mobileModifiedVersion = window.matchMedia("min-width: 45rem");
function handelMobileModifiers(e) {
  const imgSrc = document.querySelector(".showcase-img");
  if (e.matches) {
    imgSrc.setAttribute("src", "./assets/images/image-mockups.png");
  } else {
    imgSrc.setAttribute("src", "./assets/images/image-mockups.png");
  }
}

mobileModifiedVersion.addEventListener("resize", handelMobileModifiers);
handelMobileModifiers(mobileModifiedVersion);
