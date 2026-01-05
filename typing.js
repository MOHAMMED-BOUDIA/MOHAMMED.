const text = "Frontend Developer";
let i = 0;
const el = document.getElementById("typing");

function type(){
  if(i < text.length){
    el.textContent += text.charAt(i++);
    setTimeout(type,100);
  }
}
type();
