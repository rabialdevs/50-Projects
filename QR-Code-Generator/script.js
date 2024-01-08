let qrInput = document.querySelector("#input");
let submit = document.querySelector("#submit");
let qrImage = document.querySelector("#qr-img");

submit.addEventListener("click", function () {
  qrInput.value ? (function () {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
  })() : alert("Please Enter a valid Url");
  qrInput.value = ""
})