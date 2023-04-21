const header = document.querySelector(".header");

function hideHeader() {
  header.classList.remove("slide-down");
}

function showHeader() {
  header.classList.add("slide-down");
}

// If mouse's Y position within 116px from the top of the page, show header
// (provided that the header is currently hidden)
let isHeaderHidden = false;

function showOnHover(e) {
  if (window.scrollY > 116 && isHeaderHidden === true) {
    e.clientY <= 116 ? showHeader() : hideHeader();
  }
}

// Header will be hidden or shown based on current scroll position
// Scrolling down will hide the header,
// Scrolling up will bring back the header (until the page is scrolled down again)
let lastScrollY = 0;

function scrollBehavior() {
  if (window.scrollY > 116) {
    if (window.scrollY > lastScrollY) {
      hideHeader();
      isHeaderHidden = true;
    }

    if (window.scrollY < lastScrollY) {
      showHeader();
      isHeaderHidden = false;
    }
  }

  lastScrollY = window.scrollY;
}

window.addEventListener("DOMContentLoaded", showHeader);

document.addEventListener("mousemove", showOnHover);

window.addEventListener("scroll", scrollBehavior);
