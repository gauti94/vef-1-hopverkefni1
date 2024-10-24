function checkScreenSize1() {
  const textElement = document.getElementById("get-ready");
  if (textElement) {
    if (window.innerWidth >= 800) {
      textElement.textContent = "Get ready to get busy";
    } else {
      textElement.textContent = "All the news are here";
    }
  }
}

function checkScreenSize2() {
  const textElement = document.getElementById("book-change");
  if (textElement) {
    if (window.innerWidth >= 800) {
      textElement.textContent =
        "Pumpkin pie is a sweet dessert pie with a spiced, pumpkin-based custard filling. The pumpkin is a symbol of harvest time, and pumpkin pie is often eaten during the fall and early winter.";
    } else {
      textElement.textContent =
        "As you pour the first glass of your favorite Chianti or Chardonnay";
    }
  }
}

function checkScreenSize3() {
  const textElement = document.getElementById("want-some-action");
  if (textElement) {
    if (window.innerWidth >= 800) {
      textElement.textContent = "Want some action?";
    } else {
      if (textElement) {
        textElement.textContent = "All the news are here";
      }
    }
  }
}
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById("menu-overlay");
const closeBtn = document.getElementById("close");

if (hamburger) {
  hamburger.addEventListener("click", function () {
    if (menuOverlay) menuOverlay.classList.add("active");
  });
}

closeBtn?.addEventListener("click", function () {
  menuOverlay?.classList.remove("active");
});
checkScreenSize1();
checkScreenSize2();
checkScreenSize3();

window.addEventListener("resize", checkScreenSize1);
window.addEventListener("resize", checkScreenSize2);
window.addEventListener("resize", checkScreenSize3);
