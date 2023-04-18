const wrapper = document.querySelector(".wrapper");
const backdrop = document.querySelector(".bg-backdrop");
const closeButton = document.querySelector(".close-button");
const panelContainer = document.querySelector(".slide-over-container");
const contentOutline = document.querySelector(".content-outline");

const registerButton = document.createElement("button");
registerButton.innerText = "Register";
registerButton.setAttribute(
	"style",
	"font-size: 1.125rem; color: rgb(17 24 39); margin: 1rem; padding: 0.5rem 0.75rem;"
);
document.body.appendChild(registerButton);

function slideOut(element) {
	element.classList.add("slide-out");
	element.classList.remove("slide-in");
}

function slideIn(element) {
	element.classList.add("slide-in");
	element.classList.remove("slide-out");
}

function unhide(element) {
	element.style.display = "block";
}

function hide(element) {
	element.style.display = "none";
}

function openPanel() {
	unhide(wrapper);
	setTimeout(() => unhide(backdrop), 600);
	slideIn(panelContainer);
}

function closePanel() {
	slideOut(panelContainer);
	setTimeout(() => hide(backdrop), 600);
	setTimeout(() => hide(wrapper), 700);
}

const mockContent = contentOutline.appendChild(document.createElement("img"));
mockContent.setAttribute("src", "http://surl.li/gkwiv");
mockContent.setAttribute("style", "width: 100%");
contentOutline.setAttribute("style", "display: flex; align-items: center;");

// Events
window.addEventListener("DOMContentLoaded", () => {
	hide(backdrop);
	hide(wrapper);
});

registerButton.addEventListener("click", openPanel);
closeButton.addEventListener("click", closePanel);
backdrop.addEventListener("click", closePanel);
