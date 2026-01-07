const dropdown = document.querySelector(".dropdown");
const hamb     = document.querySelector(".hamburg");
const cancel   = document.querySelector(".cancel");

export function openMenu() {
  dropdown.classList.add("active");
  hamb .style.opacity = "0";
  hamb .style.pointerEvents = "none";
  cancel.style.opacity = "1";
  cancel.style.pointerEvents = "auto";
}

export function closeMenu() {
  dropdown.classList.remove("active");
  hamb .style.opacity = "1";
  hamb .style.pointerEvents = "auto";
  cancel.style.opacity = "0";
  cancel.style.pointerEvents = "none";
}

document
  .querySelectorAll(".dropdown .links a")
  .forEach(link => {
    link.addEventListener("click", closeMenu);
  });
