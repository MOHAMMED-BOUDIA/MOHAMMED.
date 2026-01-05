const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
  nav.classList.toggle("shadow-xl",scrollY>50);
});

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    if(scrollY >= sec.offsetTop-150) current = sec.id;
  });
  links.forEach(a=>{
    a.classList.toggle("text-blue-400", a.getAttribute("href") == "#"+current);
  });
});
