class Player {
    constructor(ctx, width, height, gamew, gameh, keys) {
        this.ctx = ctx;
        this.width = width;
        this.height = height
        this.gameWidth = gamew;
        this.gameHeight = gameh;
        this.keys = keys;


        this.img = new Image()
        this.img.src = './img/flappy.png';

        this.imgWidth = 35;
        this.imgHeight = 35;

        this.posY0 = this.width / 2;
        this.posX0 = this.height / 2;

        this.posX = this.posX0;
        this.posY = this.posY0;

        this.velY = 15;
        this.gravity = 0.6;
        this.borderWidth = (this.width - this.gameWidth) / 2;
        this.borderHeight = (this.height - this.gameHeight) / 2;
        
        this.setListeners();
    }

    draw() {

        this.ctx.drawImage(this.img, this.posX, this.posY, this.imgWidth, this.imgHeight);
    }


    setListeners() {
        document.addEventListener("keydown", e => {
      
            //LEFT
            if (e.keyCode === 68) {
                this.posX += 20
            }
            //RIGHT
            if (e.keyCode === 65) {
                this.posX -= 20
            }
            if (e.keyCode === 32) {
                this.velY = 10;
            }
        })
    }

    move() {
        this.posY -= this.velY;
        this.velY -= this.gravity;

        if (this.posY >= this.borderHeight + this.gameHeight - this.imgHeight - 18) {
            this.posY = this.borderHeight + this.gameHeight - this.imgHeight - 18;
        }

        if (this.posX <= this.borderWidth) {
            this.posX = this.borderWidth
        }

        if (this.posX >= this.borderWidth + this.gameWidth - this.imgWidth) {
            this.posX = this.borderWidth + this.gameWidth - this.imgWidth
        }
    }


    // isInStair(stairs){
    //     obstacles.forEach((obstacle) =>{
    //         return   ( player.posX < this.stair.posX + this.stair.width &&
    //             player.posX + player.imgWidth > this.stair.posX && 
    //             player.posY < this.stair.posY + this.stair.height &&
    //             player.posY + player.imgHeight > this.stair.posY)

    //     })}

    upStair(){

    document.addEventListener("keydown", e => {
        if (e.keyCode === 83) {
            this.posY ++
            if(this.player.posY >= this.Platforms.posY){
                this.player.posY0 = this.Platforms.posY
            }
            
        }
            if (e.keyCode === 87) {
                this.posY --
                // if(this.player.posY >= this.Platforms.posY){
                //     this.player.posY0 = this.Platforms.posY
                // }            
            }
            
        })
    }

    }