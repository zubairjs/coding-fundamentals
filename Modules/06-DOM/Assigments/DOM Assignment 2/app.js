const palette = document.querySelector(".palette");
const searchInput = document.querySelector(".search-input");
const resultsList = document.querySelector(".results-container");
const resultItems = document.querySelectorAll(".result-item");

function fadeIn(element) {
	element.classList.replace("fade-out", "fade-in");
	searchInput.focus();
}

function fadeOut(element) {
	element.classList.replace("fade-in", "fade-out");
	searchInput.blur();
}

function selectAsInput(target) {
	searchInput.value = target.innerText;
	searchInput.focus();
}

function hide(element) {
	element.style.display = "none";
}

function unhide(element) {
	element.style.display = "block";
}

function filterSearch() {
	let query = searchInput.value;
	resultItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(query.toLowerCase())) {
			unhide(item);
		} else {
			hide(item);
		}
	});
}

document.addEventListener("keydown", (e) => {
	// if (e.metaKey && e.key === "k") {
	// 	e.preventDefault();
	// 	fadeIn(palette);
	// }

	// if (e.ctrlKey && e.key === "k") {
	// 	e.preventDefault();
	// 	fadeIn(palette);
	// }

	if (e.getModifierState("Meta") && e.key === "k") {
		e.preventDefault();
		fadeIn(palette);
	}

	if (e.getModifierState("Control") && e.key === "k") {
		e.preventDefault();
		fadeIn(palette);
	}

	if (e.key === "Escape") {
		fadeOut(palette);
	}
});

document.addEventListener("click", (e) => {
	if (
		e.target.className !== "search-container" &&
		e.target.className !== "search-input" &&
		e.target.className !== "result-item" &&
		e.target.className !== "no-result"
	) {
		fadeOut(palette);
	}
});

resultsList.addEventListener("click", (e) => {
	selectAsInput(e.target);
});

searchInput.addEventListener("input", filterSearch);
