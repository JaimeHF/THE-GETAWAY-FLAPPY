class Background {
    constructor(ctx, w, h, gamew, gameh, src) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;
        this.gameWidth = gamew;
        this.gameHeight = gameh;

        this.img = new Image()
        this.img.src = '/img/puertas-correderas.jpg';
        

        this.posX = (this.width-this.gameWidth) / 2 ;
        this.posY = (this.height-this.gameHeight) /2;
    }
    draw() {
       //this.ctx.drawImage(this.img, this.posX, this.posY, this.gameWidth, this.gameHeight);

    

        // this.ctx.beginPath()
        // this.ctx.fillStyle = rgba( 0, 0 ,0 ,0.2)
        // this.ctx.fillRect(400, 100, this.width - 800, this.height - 200)
        // this.ctx.closePath()

    }

   

    
}