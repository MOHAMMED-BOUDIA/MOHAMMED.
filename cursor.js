const cur = document.createElement("div");
cur.className="cursor";
document.body.appendChild(cur);

document.addEventListener("mousemove",e=>{
  cur.style.left=e.clientX+"px";
  cur.style.top=e.clientY+"px";
});
