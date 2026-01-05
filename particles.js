const canvas = document.createElement("canvas");
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

const particles=[];

for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:2,
    dx:(Math.random()-0.5),
    dy:(Math.random()-0.5)
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.dx; p.y+=p.dy;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
