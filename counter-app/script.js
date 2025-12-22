var btnDe = document.querySelector(".decrement");
var btnIn = document.querySelector(".increment");
var btnRe = document.querySelector(".restart");
var h1 = document.querySelector("h1");
var count = 0;

btnDe.addEventListener("click", () => {
  count--;
  h1.innerHTML = count + ".";
});
btnIn.addEventListener("click", () => {
  count++;
  h1.innerHTML = count + ".";
});
btnRe.addEventListener("click", () => {
  count = 0;
  h1.innerHTML = count + ".";
});
