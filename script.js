// active navbar link
const navLinks = document.querySelectorAll(".nav__list a");

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    item.classList.add("active");
  });
});

// responsive header

const headerMenuBtn = document.querySelector(".header__menu__btn");
const navList = document.querySelector(".nav__list");

headerMenuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
