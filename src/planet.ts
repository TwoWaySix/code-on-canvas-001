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
export default Planet;