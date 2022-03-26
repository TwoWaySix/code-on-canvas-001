"use strict";
class Planet {
    constructor(x = 0, y = 0, vx = 0, vy = 0, mass = 1) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.mass = mass;
    }
    move(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;
    }
}
const canvas = document.getElementById("canvas");
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const DT = 1;
const NPLANETS = 10000;
const SIZE = WIDTH / 700;
const planets = [];
var gray = 0;
canvas.width = WIDTH;
canvas.height = HEIGHT;
function advanceColor() {
    gray = gray > 255 ? 0 : (gray + 1);
    return "rgba(" + gray.toString() + "," + gray.toString() + "," + gray.toString() + ",0.5)";
}
function draw() {
    var ctx = canvas.getContext("2d");
    if (!ctx) {
        return;
    }
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
        planets.push(new Planet(Math.random() * WIDTH, Math.random() * HEIGHT, Math.random() * 10 - 5, Math.random() * 10 - 5, 1.0));
    }
    window.requestAnimationFrame(draw);
}
init();
//# sourceMappingURL=index.js.map