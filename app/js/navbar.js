export default function handleDropdownBtnClick(e) {
  const button = e.target
  const navbar = button.previousElementSibling
  const activeNavigation = navbar.querySelector(".navbar__list-item--active")
  const restNavigations = [...navbar.children].filter(n =>
    [...n.classList].every(c => c !== "navbar__list-item--active")
  )

  const behindNavPosition = "-1"
  const infrontOfNavPostion = ""

  if (button.style.order !== behindNavPosition) {
    button.style.order = behindNavPosition
    activeNavigation.dataset.hide = "yes"
  } else {
    button.style.order = infrontOfNavPostion
    activeNavigation.dataset.hide = "no"
  }

  button.classList.toggle("rotate-90-deg")

  handleShowHideNavigation(activeNavigation, restNavigations)
}

function handleShowHideNavigation(activeNavigation, restNavigations) {
  const willHide = activeNavigation.dataset.hide === "yes" ? true : false
  activeNavigation.classList.toggle("navbar__list-item--hide", willHide)

  restNavigations.forEach(n =>
    n.classList.toggle("navbar__list-item--hide", !willHide)
  )
}
