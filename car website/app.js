document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const popupWrapper = document.createElement("div");
  popupWrapper.className = "popup-wrapper";
  popupWrapper.innerHTML = container.innerHTML;

  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.appendChild(popupWrapper);

  const closeIcon = document.createElement("i");
  closeIcon.className = "fas fa-times popup-close";
  closeIcon.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
  popupWrapper.appendChild(closeIcon);

  document.body.appendChild(overlay);
  container.style.display = "none";

  document.querySelectorAll(".svg-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      overlay.classList.add("active");
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const centerRightWrapper = document.querySelector(".nav-center-right-wrapper");

menuToggle.addEventListener("click", () => {
  console.log("hello");
  centerRightWrapper.classList.toggle("active");
});
const links = document.querySelectorAll(".nav-menu1 a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove active class from all links
    links.forEach((l) => l.classList.remove("active"));

    // Add active to the clicked one
    link.classList.add("active");
  });
});
