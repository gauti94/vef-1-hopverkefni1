function checkScreenSize() {
    const textElement = document.getElementById("get-ready");
    if (window.innerWidth >= 800) {
      textElement.textContent = "Get ready to get busy";
    } else {
      textElement.textContent = "All the news are here";
    }
  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);