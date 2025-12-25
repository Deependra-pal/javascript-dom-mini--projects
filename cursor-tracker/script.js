var main = document.querySelector("main");
var cur = document.querySelector(".cursor");
main.addEventListener("mousemove",(val)=>{
   
  cur.style.left = val.x + "px";
  cur.style.top = val.y + "px";
   
})