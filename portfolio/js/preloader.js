// Preloader

setTimeout(function() {
  document.querySelector("html").classList.add("loader")
  document.querySelector("html").classList.remove("loader")
  document.querySelector(".loader").style.transition = "all 1.5s ease"
  document.querySelector(".loader").style.display = "none"
}, 3500);