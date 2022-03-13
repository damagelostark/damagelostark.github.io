	var scrollBtn = document.querySelector(".scrollBtn");
	var rootElement = document.documentElement;

	function handleScroll() {
	  // Do something on scroll
	  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
	  if (rootElement.scrollTop / scrollTotal > 0.8) {
		// Show button
		scrollBtn.classList.add("showBtn");
	  } else {
		// Hide button
		scrollBtn.classList.remove("showBtn");
	  }
	}

	function scrollToTop() {
	  // Scroll to top logic
	  rootElement.scrollTo({
		top: 0,
		behavior: "smooth"
	  });
	}
	scrollBtn.addEventListener("click", scrollToTop);
	document.addEventListener("scroll", handleScroll);