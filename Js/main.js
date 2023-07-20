document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const buttonNav = document.querySelector(".navbar-toggler");
	const navbarNav = document.getElementById("navbarNav");
	const navbarLinks = document.querySelectorAll(".nav-link");
	const footerYear = document.querySelector(".footer-year");

	// function addShadow () {
	//     if (window.scrollY >= 0) {
	//         nav.classList.add("nav-bg-shadow");
	//     } else {
	//         nav.classList.remove("nav-bg-shadow");
	//     }
	// }

	// window.addEventListener("scroll", addShadow)

	const handleCurrentYear = () => {
		const year = new Date().getFullYear();

		footerYear.innerText = year;
	};

	handleCurrentYear();

	const showNavbar = () => {
		if (window.scrollY >= 100) {
			nav.style.opacity = "1";
			nav.style.transform = "translateY(0%)";
		} else {
			nav.style.opacity = "0";
			nav.style.transform = "translateY(-110%)";
		}
	};

	window.addEventListener("scroll", showNavbar);

	const navHandler = () => {
		navbarLinks.forEach((link) => {
			link.addEventListener("click", () => {
				navbarNav.classList.remove("show");
			});
		});
	};

	buttonNav.addEventListener("click", navHandler);
});
