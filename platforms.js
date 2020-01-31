class Platforms {
    constructor(ctx, x, y, w, h) {
        this.ctx = ctx;
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = 16;

     
    }

    draw() {
        


        this.ctx.beginPath();
        this.ctx.fillStyle = `#a8b0ab`;
        this.ctx.rect(this.posX , this.posY, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
    }


}