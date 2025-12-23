var btn = document.querySelector(".inner");
var main = document.querySelector("main");
var dark = 1;

btn.addEventListener("click", () => {
  if (dark === 1) {
    btn.style.left = "60%";
    main.style.backgroundColor = "#1c1c1c";
    btn.style.background = "linear-gradient( to top left,#000,#fff)";
    dark = 2;
  } else {
    btn.style.left = "0%";
    main.style.backgroundColor = "#fff";
    btn.style.background = "linear-gradient( to right bottom,orange,orangered)";
    dark = 1;
  }
});
