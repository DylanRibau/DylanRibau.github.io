const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = [];
const numCircles = 75; 

class Circle {
  constructor() {
    this.radius = Math.random() * 2 + 2; // Random size
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height; 
    this.speed = Math.random() * 0.25 + 0.5;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#03346E';
    ctx.fill();
  }

  update() {
    this.y += this.speed; 
    if (this.y > canvas.height) {
      this.y = -this.radius; 
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

for (let i = 0; i < numCircles; i++) {
  circles.push(new Circle());
}

function animate() {
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    
    circles.forEach(circle => circle.update()); 

    requestAnimationFrame(animate); 
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();
