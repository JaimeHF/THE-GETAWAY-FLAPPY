class Stairs {
    constructor(ctx, x, y, w, h) {
        this.ctx = ctx;
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;

        this.img = new Image()
        this.img.src = '/img/stair.jpg';
    }

    draw() {
        this.ctx.drawImage(this.img, this.posX , this.posY, this.width, this.height );

        // this.ctx.beginPath();
        // this.ctx.fillStyle = `yellow`;
        // this.ctx.rect(this.posX , this.posY, this.width, this.height);
        // this.ctx.fill();
        // this.ctx.closePath();
    }


}


