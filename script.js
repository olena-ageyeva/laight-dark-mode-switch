const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const backgroundLight = "rgb(255 255 255 /50%)";
const backgroundDark = "rgb(0 0 0 /50%)";

function imageMode(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function toggleTheme(theme) {
  const isLight = theme === LIGHT_THEME;

  nav.style.backgroundColor = isLight ? backgroundLight : backgroundDark;
  textBox.style.backgroundColor = isLight ? backgroundDark : backgroundLight;
  toggleIcon.children[0].textContent = `${theme} Mode`;
  isLight
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode(theme);
}

function switchTheme(event) {
  const currentTheme = event.target.checked ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  toggleTheme(currentTheme);
}

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  toggleSwitch.checked = true;
  toggleTheme(currentTheme);
}
