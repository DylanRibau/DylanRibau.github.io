const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
const numShapes = 75; 

class Shape {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height; 
        this.speed = Math.random() * 0.25 + 0.5;
    }

    update() {
        this.y += this.speed; 
        if (this.y > canvas.height) {
            this.y = -this.size; 
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.size = Math.random() * 2 + 2;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#03346E';
        ctx.fill();
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.size = Math.random() * 2 + 5;
    }

    draw() {
        ctx.fillStyle = '#03346E';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.size = Math.random() * 2 + 10;
    }

    draw() {
        const height = (this.size * Math.sqrt(3)) / 2;

        ctx.fillStyle = '#03346E';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y); // Bottom-left
        ctx.lineTo(this.x + this.size, this.y); // Bottom-right
        ctx.lineTo(this.x + this.size / 2, this.y - height); // Top-middle
        ctx.closePath();
        ctx.fill();
    }
}

for (let i = 0; i < numShapes; i++) {
    randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            shapes.push(new Triangle());
            break;
        case 1:
            shapes.push(new Square());
            break;
        case 2:
        default:
            shapes.push(new Circle());
            break;
    }
}

function animate() {
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    shapes.forEach(shape => shape.update()); 

    requestAnimationFrame(animate); 
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();
