
const burger = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")

const menuIkonka = burger.querySelector("i")
const openMenu = () => {
  menuPolozky.classList.toggle("show")
  menuIkonka.classList.toggle("fa-bars")
  menuIkonka.classList.toggle("fa-xmark")
}
burger.addEventListener("click", openMenu)