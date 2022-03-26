class Planet {
    x: number;
    y: number;
    vx: number;
    vy: number;
    mass: number;

    constructor(
            x: number = 0, 
            y: number = 0, 
            vx: number = 0, 
            vy: number = 0, 
            mass: number = 1
    ) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.mass = mass;
    }

    move(dt: number) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
    }
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const WIDTH: number = window.innerWidth;
const HEIGHT: number = window.innerHeight;
const DT: number = 1;
const NPLANETS: number = 10000;
const SIZE: number = WIDTH / 700;

const planets: Array<Planet> = [];
var gray: number = 0;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function advanceColor(): string {
    gray = gray > 255 ? 0 : (gray + 1);
    return "rgba(" + gray.toString() + "," + gray.toString() + "," + gray.toString() + ",0.5)";
}

function draw() {
    var ctx = canvas.getContext("2d");
    if (!ctx) { return; }

    ctx.fillStyle = advanceColor();
    
    for (let i = 0; i < planets.length; i++) {
        let p = planets[i];
        p.move(DT);
        if (p.x < 0 || p.x > WIDTH) {
            p.vx *= -1;
        }
        if (p.y < 0 || p.y > HEIGHT) {
            p.vy *= -1;
        }
        ctx.fillRect(p.x, p.y, SIZE, SIZE);
    }

    window.requestAnimationFrame(draw);
}

function init() {
    for (let i = 0; i < NPLANETS; i++) {
        planets.push(
            new Planet(
                Math.random() * WIDTH,
                Math.random() * HEIGHT,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                1.0
            )
        );
    }

    window.requestAnimationFrame(draw);
}

init();

