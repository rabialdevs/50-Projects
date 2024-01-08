let counters = document.querySelectorAll(".counter");
console.log(counters);
counters.forEach((counter) => {
  // console.log(counter.innerText);
  counter.innerText = "0";
  let target = counter.getAttribute("data-target");
  console.log(target);
  let count = 0;
  console.log(count);
  function incrementCount() {
    if (count < target) {
      count = count + 1;
      counter.innerText = count;
      setInterval(incrementCount, 100);
    } else {
      counter.innerText = target;
    }
  }
  incrementCount();
});
