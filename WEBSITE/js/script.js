// pobieramy element z klasą "menu-button" i przypisujemy go do zmiennej button
const button = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

// tworzymy funkcję toggleMenu
function toggleMenu() {
  nav.classList.toggle("nav-mobile");
  button.classList.toggle("menu-button-open");

  if (button.classList.contains("menu-button-open")) {
    button.innerHTML = "X";
  } else {
    button.innerHTML = "menu";
  }
}

// nasłuchujemy na zdarzenie na elemencie "button", czekamy na zdarzenie kliknięcia
// uruchamiamy funkcję toggleMenu jeśli klinięcie wystąpi
button.addEventListener("click", toggleMenu);