class Player {
    constructor(ctx, width, height, keys, platforms) {
        this.ctx = ctx;
        this.width = width;
        this.height = height
        this.keys = keys;
        this.isInStair = false;
        this.frames = 3;
        this.framesIndex = 0;


        this.img = new Image()
        this.img.src = './img/flappy.png';


        this.imgWidth = 30;
        this.imgHeight = 30;

        this.posY0 = this.height - 16 - this.imgHeight;
        this.posX0 = 40;

        this.posX = this.posX0;
        this.posY = this.posY0;

        this.velY = 5;
        this.gravity = 0.3;
        this.bullets = [];
        this.vx = 7

        this.keyState = {
            keyLeft: false,
            keyRight: false
        };

        this.setListeners();
    }

    draw() {
        // console.log(this.isJumping)
        this.ctx.drawImage(this.img, this.posX, this.posY, this.imgWidth, this.imgHeight);
console.log(this.posY)
console.log(this.posx)
        // this.ctx.drawImage(
        //     this.image,
        //     this.image.framesIndex * Math.floor(this.imgWidth / this.frames),
        //     0,
        //     Math.floor(this.imgWidth / this.frames),
        //     this.imgHeight,
        //     this.posX,
        //     this.posY,
        //     this.width,
        //     this.height
        // );
        // this.animate(framesCounter);

    }
    // animate(framesCounter) {
    //     if (framesCounter % 5 == 0) {
    //       this.image.framesIndex++;
    //     }
    //     if (this.image.framesIndex > this.image.frames - 1) {
    //       this.image.framesIndex = 0;
    //     }
    //   }


    setListeners() {
        document.addEventListener("keydown", e => {
            //  UP
            if (e.keyCode === 87) {
               if(this.isInStair){
                   this.posY -= 25
                   this.keyState.keyUp = true;}
                
            }
            // // DOWN
            // if (e.keyCode === 83) {
            //     // if(this.isInStair){
            //         this.posY += 25
            //         this.keyState.keyDown = true;
            // }
            //LEFT
            if (e.keyCode === 68) {
                this.keyState.keyRight = true;
            }
            //RIGHT
            if (e.keyCode === 65) {
                this.keyState.keyLeft = true;
            }
            //JUMP
            if (e.keyCode === 32) {
                if(!this.isInStair){
                    this.velY = 5.5
                    this.isJumping = true;
                }
            }
        })
        document.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 68) {
                this.keyState.keyRight = false;
            }
            if (e.keyCode === 65) {
                this.keyState.keyLeft = false;
            }
            if (e.keyCode === 87) {
                this.keyState.keyUp = false;
            }
            if (e.keyCode === 87) {
                this.keyState.keyDown = false;
            }
            if (e.keyCode === 32) {
                setTimeout(() => {
                    this.isJumping = true;
                }, 500)
            }
        })

    }

    move = () => {
       if(!this.isInStair){
           this.posY -= this.velY;
        this.velY -= this.gravity;}

        if (this.posY >= this.posY0) {
            this.posY = this.posY0
        }

        if (this.keyState.keyLeft && this.posX > 0) {
            this.posX -= this.vx
        }
        if (this.keyState.keyRight && this.posX + this.imgWidth < this.width) {
            this.posX += this.vx
        }

    }


}