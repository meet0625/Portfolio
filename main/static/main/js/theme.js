/* ================================
   MOBILE NAVBAR TOGGLE
================================ */

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");

  if (!navLinks) return; // safety check

  navLinks.classList.toggle("show");
}

/* ================================
   THEME TOGGLE (LIGHT / DARK)
================================ */

function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector(".theme-btn");

  if (!btn) return; // safety check

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    btn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    btn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
}

/* ================================
   LOAD SAVED THEME ON PAGE LOAD
================================ */

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const btn = document.querySelector(".theme-btn");

  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    if (btn) btn.textContent = "☀️";
  }
});
