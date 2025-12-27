var h1 = document.querySelector("h1");
var body =  document.body;
 
body.addEventListener("keydown",(val)=>{
 console.log(val.code);
 h1.innerHTML =  val.code; 
})

 
