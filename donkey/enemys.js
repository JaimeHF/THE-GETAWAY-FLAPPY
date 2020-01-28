class Enemys {
    constructor(ctx, x, y, w, h) {
        this.ctx = ctx;
        this.posX = x;
        this.posY = y;
        this.witdh = w;
        this.height = h;

        this.img = new Image()
        this.img.src = '/img/flappy.png';

        this.imgWidth = 35;
        this.imgHeight = 35;
        this.posX0 = 400
    }



    draw() {
        // this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);

        this.ctx.beginPath()
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(this.posX, this.bortderHeight , 35, 35)
        this.ctx.closePath()
    }

    move() {
        this.posX += this.velX;
    }
}