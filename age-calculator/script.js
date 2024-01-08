let input = document.querySelector(".age-dob-date");
let button = document.querySelector(".btn");
let result = document.querySelector(".result");

button.addEventListener("click", () => {
  input.value === ""
    ? alert("Please Enter Your Age")
    : (function () {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let age = input.value.split("-");
        result.innerHTML = `Your Age is ${year - age[0]}`;
      })();
});
