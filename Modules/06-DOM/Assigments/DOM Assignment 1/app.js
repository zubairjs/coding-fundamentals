const addButton = document.querySelector(".add__button");
const closeButton = document.querySelector(".cta__button");
const notificationClasses = document.querySelector(".notification").classList;
const page = document.querySelector("html");

function showNotification() {
	notificationClasses.add("show");
	notificationClasses.remove("hidden");
}

function hideNotification() {
	notificationClasses.remove("show");
	notificationClasses.add("hidden");
}

// Events
addButton.addEventListener("click", (e) => {
	e.stopPropagation();
	showNotification();
});

closeButton.addEventListener("click", (e) => {
	e.stopPropagation();
	hideNotification();
});

page.addEventListener("click", (e) => {
	e.stopPropagation();
	if (e.target.nodeName === "HTML") hideNotification();
});

document.body.addEventListener("click", (e) => {
	e.stopPropagation();
	if (e.target.nodeName === "BODY") hideNotification();
});
