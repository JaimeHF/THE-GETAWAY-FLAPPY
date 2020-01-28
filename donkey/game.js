const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    realw: undefined,
    realh: undefined,
    FPS: 60,
    framesCounter: 0,
    score: 0,
    obstacles: [],
    keys: {
        UP: 87,
        DOWN: 83,
        RIGHR: 65,
        LEFT: 68,
        SPACE: 32,
    },


    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.background = new Background(this.ctx, this.width, this.height, this.src);
        this.player = new Player(this.ctx, this.width, this.height, this.realw, this.realh, this.keys);

        this.stairs = [];
        this.platforms = [];
        this.enemys = [];
        this.star();
    },

    star() {
        this.reset();
        this.interval = setInterval(() => {
            this.framesCounter ++;
            this.clear();
            this.generateEnemys()
            this.drawAll();
            this.player.move();
            this.stairs.forEach(stair => this.isInStair(stair)); 
            // this.enemys.move();
  

        }, 1000 / this.FPS);

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, this.realw, this.realh, this.src);
        this.player = new Player(this.ctx, this.width, this.height, this.realw, this.realh, this.keys);
        this.platforms = [
            new Platforms(this.ctx, this.borderWidth, this.realh + this.bortderHeight - 18, 790, 16),
            new Platforms(this.ctx, this.borderWidth, this.realh + this.bortderHeight - 18 - 100, 730, 16),
            new Platforms(this.ctx, this.borderWidth + 60, this.realh + this.bortderHeight - 18 - 200, 730, 16),
            new Platforms(this.ctx, this.borderWidth, this.realh + this.bortderHeight - 18 - 300, 730, 16),
            new Platforms(this.ctx, this.borderWidth + 60, this.realh + this.bortderHeight - 18 - 400, 730, 16),
        ]

        this.stairs = [
            new Stairs(this.ctx, this.borderWidth + 600, this.realh - this.bortderHeight + 59, 20, 102),
            new Stairs(this.ctx, this.borderWidth + 100, this.realh - this.bortderHeight + 59 - 100, 20, 102),
            new Stairs(this.ctx, this.borderWidth + 700, this.realh - this.bortderHeight + 59 - 200, 20, 102),
            new Stairs(this.ctx, this.borderWidth + 250, this.realh - this.bortderHeight + 59 - 300, 20, 102),
        ]

        // this.enemys = [
        //     new Enemys(this.ctx, this.posX, this.posY, this.gameWidth, this.gameHeight)
        // ]

    },
    setDimensions() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.realw = this.width * 0.55;
        this.realh = this.height * 0.75;
        this.borderWidth = (this.width - this.realw) / 2;
        this.bortderHeight = (this.height - this.realh) / 2;
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    drawAll() {
        this.background.draw();
        this.platforms.forEach(platform => platform.draw());
        this.stairs.forEach(stair => stair.draw());
        this.player.draw();
        this.enemys.draw();
        
       
    },

    isInStair(stair,player){
     if(this.player.posX < stair.posX + stair.width &&
            this.player.posX + this.player.imgWidth > stair.posX && 
            this.player.posY < stair.posY + stair.height &&
            this.player.posY + this.player.imgHeight > stair.posY){ 
                
                this.player.upStair();
            console.log("fuck")}
    },

    




    generateEnemys() {
        console.log(this.enemys);
        if (this.framesCounter % 90 == 0) {
          this.Enemys.push(new Enemys(this.ctx, this.posX, this.posY, this.width, this.height));
          console.log(this.enemys);
        }
      },
    
      clearEnemys() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= 0);
      },
    

}