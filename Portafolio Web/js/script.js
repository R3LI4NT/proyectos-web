const Top = document.querySelector(".btn-arriba");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    Top.classList.add("active");
  } else {
    Top.classList.remove("active");
  }
})
