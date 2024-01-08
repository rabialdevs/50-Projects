let button = document.querySelector(".button");
let input = document.querySelector(".input");
button.addEventListener("click", () => {
  if (input.classList.contains("active")) {
    input.classList.remove("active");
  } else {
    input.classList.add("active");
    input.foucs();
  }
});
