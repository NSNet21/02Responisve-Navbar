// change theme logic

// ────────────── SELECT ELEMENT ──────────────
const getButton = document.getElementById("themeSwap");
const icon = getButton.children[0]; // <i>
const textNode = getButton.childNodes[2]; // <-- ตัว text หลัง <i>

// ────────────── CONSTANTS ──────────────
const lightBtnClass = "fa-solid fa-sun";
const darkBtnClass = "fa-solid fa-moon";
const lightThemeTxt = " Light Theme";
const darkThemeTxt = " Dark Theme";

// ────────────── FUNCTION: APPLY STATE ──────────────
function applyThemeState(theme) {
  if (theme === "dark") {
    icon.className = lightBtnClass;
    textNode.textContent = lightThemeTxt;
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    icon.className = darkBtnClass;
    textNode.textContent = darkThemeTxt;
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// ────────────── LOAD FROM STORAGE ──────────────
const savedTheme = localStorage.getItem("themeState");
if (savedTheme) {
  applyThemeState(savedTheme);
} else {
  // ถ้ายังไม่เคยเซฟ จะตั้งเป็น light เป็นค่าเริ่มต้น
  applyThemeState("dark");
}

// ────────────── EVENT LISTENER ──────────────
getButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "light") {
    applyThemeState("dark");
    localStorage.setItem("themeState", "dark");
  } else {
    applyThemeState("light");
    localStorage.setItem("themeState", "light");
  }
});

// close navbar on li class="bottom"
const hamIcon = document.getElementById("rightToggle");
const navBar = document.getElementById("topnavRight");
function closeNav() {
  navBar.classList.remove("show");
  hamIcon.classList.remove("hide");
}

// open navbar from hamburger icon

hamIcon.addEventListener("click", () => {
  navBar.classList.add("show");
  hamIcon.classList.add("hide");
});

// close navbar when click somewhere else outside the navbar

document.addEventListener("click", (e) => {
  const isClickInNavBar = navBar.contains(e.target);
  const isClickInHamIcon = hamIcon.contains(e.target);

  if (
    !isClickInNavBar &&
    !isClickInHamIcon &&
    navBar.classList.contains("show") &&
    hamIcon.classList.contains("hide")
  ) {
    navBar.classList.remove("show");
    hamIcon.classList.remove("hide");
  }
});


