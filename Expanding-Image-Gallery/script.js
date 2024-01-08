let cards = document.querySelectorAll(".inner-container");
console.log(cards);
function removeActiveClass() {
  cards.forEach(card => {
    card.classList.remove("active");
  })
}
cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActiveClass();
   card.classList.add("active");
  })
})