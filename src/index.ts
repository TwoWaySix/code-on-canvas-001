import Planet from "./planet"

// User constants
const WIDTH: number = window.innerWidth;
const HEIGHT: number = window.innerHeight;
const DT: number = 1;
const NPLANETS: number = 10000;
const SIZE: number = WIDTH / 700;

// Canvas
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = WIDTH;
canvas.height = HEIGHT;

// Initializing
const planets: Array<Planet> = [];
var gray: number = 0;

// Increases the color of the planet to be drawn by 1
function advanceColor(): string {
    gray = gray > 255 ? 0 : (gray + 1);
    return "rgba(" + gray.toString() + "," + gray.toString() + "," + gray.toString() + ",0.5)";
}

// Draws the frame to the canvas
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

// Function to initialize the simulation
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

