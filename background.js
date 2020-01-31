class Background {
    constructor(ctx, w, h,  src) {
        this.ctx = ctx;
        this.width = w;
        this.height = h;

        this.img = new Image()
        this.img.src = './img/68c80e5b9ea13252acba61bebc18cc33.jpg';
        

     
    }
    draw() {

     this.ctx.drawImage(this.img, 0, this.height-100, 100, 100);
     this.ctx.drawImage(this.img, this.width - 100, 20, 100, 100)

    

    //    this.ctx.drawImage(
    //     this.image,
    //     this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
    //     0,
    //     Math.floor(this.image.width / this.image.frames),
    //     this.image.height,
    //     this.posX,
    //     this.posY,
    //     this.width,
    //     this.height
    //   );

    }

   

    
}