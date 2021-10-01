let navbar = document.querySelector("nav"),
  header = document.querySelector("header");

function showNavbar() {
  document
    .querySelector(".toggle .toggle-btn .toggle-icon")
    .classList.toggle("bx-x");
  navbar.classList.toggle("active");
  header.classList.toggle("to-right");
  document.querySelector(".statistics").classList.toggle("active");
  document.querySelector(".member-stuff").classList.toggle("active");
}

let links = document.querySelectorAll("nav .nav-list li a");

links.forEach(
  (e) =>
    (e.onclick = function () {
      removeAllLinks();
      e.classList.add("active");
    })
);

function removeAllLinks() {
  links.forEach((e) => e.classList.remove("active"));
}
