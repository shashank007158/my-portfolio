let openingPage = document.querySelector(".opening--page");
let mainHeader = document.querySelector(".main--header");
let hamburger = document.querySelector(".hamburger");
let navBackground = document.querySelector(".hamburger--background");
let mobileNavItem = document.querySelectorAll(
  ".hamburger__mobile-navbar ul li a"
);
let mobileLogo = document.querySelector(".mobile-logo");
let checkBox = document.querySelector(".hamburger-checkBox");
openingPage.addEventListener("click", () => {
  openingPage.classList.add("hide-my-page");
  mainHeader.classList.add("header-down");

  if (hamburger) {
    hamburger.classList.add("hamburger__open");
  }
  if (navBackground) {
    navBackground.classList.add("hamburger__open");
  }
  if (mobileLogo) {
    mobileLogo.classList.add("logo__open");
  }
});
mobileNavItem.forEach((item) => {
  item.addEventListener("click", () => {
    checkBox.click();
  });
});
