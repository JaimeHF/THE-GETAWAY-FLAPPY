class Enemys {
    constructor(ctx, x, y, width, height, platforms) {
        this.ctx = ctx;
        this.platforms = platforms

        this.width = width;
        this.height = height;

        this.isReversed = true;
        this.img = new Image()
        this.img.src = './img/png-alien-5.png';

        this.imgWidth = 45;
        this.imgHeight = 45;
        this.velX = 5
        this.velY = 0;
        this.posX = this.width - (2 * this.imgWidth);
        this.posY = 0
        this.gravity = 0;
        this.currentPlatform = 0
        this.frames = 3;
        this.framesIndex = 0;
    }



    draw(framesCounter) {
         this.ctx.drawImage(this.img, this.posX, this.posY, this.imgWidth, this.imgHeight);

    //     this.ctx.drawImage(
    //         this.img, this.framesIndex * Math.floor(this.imgWidth / this.frames),0,  Math.floor(this.imgWidth / this.frames), this.imgHeight, this.posX, this.posY, this.width, this.height
    //       ); 
    //       this.animate(framesCounter);
    // }
    // animate(framesCounter) {
    //     if (framesCounter % 5 == 0) {
    //       this.image.framesIndex++;
    //     }
    //     if (this.framesIndex > this.frames - 1) {
    //       this.framesIndex = 0;
    //     }
       }

    checkPlatforms = (platforms) => {
        platforms.forEach((platform, idx) => {
            if (this.posY <= platform.posY && this.posX <= platform.posX + platform.width && this.posX + this.imgWidth >= platform.posX) {
                this.currentPlatform = platform.posY           
            }
        });
        this.posY = this.currentPlatform - this.imgHeight
     
    }

    move() {

        this.isReversed ? this.posX -= this.velX : this.posX += this.velX
        this.posY -= this.velY;
        this.velY -= this.gravity;

        if (this.posX <= 0) {
            this.isReversed = !this.isReversed
        }
        if (this.posX >= this.width - this.imgWidth) {
            this.isReversed = !this.isReversed
        }


    }
}