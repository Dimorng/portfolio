import handleDropdownBtnClick from "./navbar.js"

const dropDownBtn = document.querySelector(".navbar__dropdown-btn")

dropDownBtn.addEventListener("click", handleDropdownBtnClick)

const scrolldownIcon = document.querySelector(".about__scroll-down-icon")

setInterval(() => {
  scrolldownIcon.classList.toggle("moveup")
}, 300)
