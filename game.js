const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    score: 0,
    obstacles: [],
    isJumping: true,
    currentPlatform: 0,
    currPlatLimitLeft: 0,
    currPlatLimitRight: 0,
    score: 21,
    keys: {
        UP: 87,
        DOWN: 83,
        RIGHR: 65,
        LEFT: 68,
        SPACE: 32,

    },



    init() {
        document.querySelector(".time").style.display = "none";
        document.querySelector(".lose").style.display = "none";
        document.querySelector(".win").style.display = "none";
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        scoreboard.init(this.ctx);
        this.music = new Howl({
            src: ["./sounds/happy-tree-friends-theme-song.mp3"],
            autoplay: true,
            loop: false,
            volume: 0.5
        });
        this.star();
    },

    star() {
        this.reset();
        this.interval = setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0;
            }

            this.framesCounter++;
            this.clear();
            this.generateEnemys()
            this.clearEnemys()
            this.drawAll();
            this.moveAll();
            this.isInStair() ? this.player.isInStair = true : this.player.isInStair = false;
            this.checkPlatforms()
            this.enemys.forEach(enemy => enemy.checkPlatforms(this.platforms))
            this.isCollision()
            if (this.player.posX >= this.width - 75 &&
                this.player.posY <= this.height - 400 &&
                this.player.posX <= this.width - 50 &&
                this.player.posY <= this.height
            ) {
                this.win()
            }

            if (Math.floor(this.score) == 0) {
                this.lose2()
            }


            this.score -= 0.016;
        }, 1000 / this.FPS);

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, this.src);
        this.player = new Player(this.ctx, this.width, this.height, this.keys, this.platforms);

        this.platforms = [
            new Platforms(this.ctx, 0, this.height - 16, this.width, 16),
            new Platforms(this.ctx, 0, this.height - 116, this.width - 60, 16),
            new Platforms(this.ctx, 60, this.height - 216, this.width, 16),
            new Platforms(this.ctx, 0, this.height - 316, this.width - 60, 16),
            new Platforms(this.ctx, 60, this.height - 416, this.width, 16),
        ]
        this.stairs = [
            new Stairs(this.ctx, 60, this.height - 418, 50, 106),
            new Stairs(this.ctx, this.width - 160, this.height - 318, 50, 106),
            new Stairs(this.ctx, 60, this.height - 218, 50, 106),
            new Stairs(this.ctx, this.width - 160, this.height - 118, 50, 106),
        ]
        this.enemys = [];
        this.scoreboard = scoreboard;
        this.score = 21;

    },
    setDimensions() {
        this.width = window.innerWidth * 0.55;
        this.height = window.innerHeight * 0.75;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    drawAll() {
        this.background.draw();
        this.platforms.forEach(platform => platform.draw());
        this.stairs.forEach(stair => stair.draw());
        this.enemys.forEach(enemy => enemy.draw());
        this.player.draw();
        this.scoreboard.update(this.score);
    },

    moveAll() {
        this.player.move();
        this.enemys.forEach(enemy => enemy.move());
    },

    generateEnemys() {
        if (this.framesCounter % 87 == 0) {
            this.enemys.push(new Enemys(this.ctx, this.posX, this.posY, this.width, this.height, this.platforms));

        }
    },

    clearEnemys() {
        this.enemys.forEach((enemy) => {
            if (enemy.posX <= 10 && enemy.posY > this.height - 20 - enemy.imgHeight) {
                this.enemys.shift();
            }
        })
    },

    checkPlatforms() {
        this.platforms.forEach((platform, idx) => {
            if (this.player.posY <= platform.posY && this.player.posX <= platform.posX + platform.width && this.player.posX + this.player.imgWidth >= platform.posX) {
                this.currPlatLimitLeft = platform.posX
                this.currPlatLimitRight = platform.posX + platform.width
                this.currentPlatform = platform.posY
            }
            this.player.posY0 = this.currentPlatform - this.player.imgHeight
        });
        if (!this.player.isInStair) {
            if (this.currPlatLimitLeft < this.player.posX && this.currPlatLimitRight > this.player.posX + 60) {
                if (this.player.posY <= this.currentPlatform - 84 && this.player.posY >= this.currentPlatform - 100) {

                    this.player.posY = this.currentPlatform + 108
                }
            }
        }

    },

    isInStair() {
        return this.stairs.some((stair, idx) => {
            return (
                this.player.posX >= stair.posX - stair.width && //true
                this.player.posX <= stair.posX + stair.width && // izquierda true y ultima plataforma , en medio 1 true 1 false, derecha siempre false
                this.player.posY <= stair.posY + stair.height && //3 false 1 true // ultima plataforma true
                this.player.posY + this.player.imgWidth >= stair.posY // true abajo, y con forme sube aumenta los false
            )
        });

    },

    isCollision() {
        this.enemys.forEach((enemy) => {
            if (
                this.player.posX <= enemy.posX + enemy.imgWidth / 3 &&
                this.player.posX + this.player.imgWidth / 3 >= enemy.posX &&
                this.player.posY <= enemy.posY + enemy.imgHeight / 3 &&
                this.player.posY + this.player.imgHeight / 3 >= enemy.posY
            ) {
                this.lose()

            }
        });
    },

    win() {
        document.querySelector(".win").style.display = "flex";
        document.querySelector(".game").style.display = "none";
        this.music.stop()
        clearInterval(this.interval);
    },

    lose() {
        document.querySelector(".lose").style.display = "flex";
        document.querySelector(".game").style.display = "none";
        this.music.stop()
        clearInterval(this.interval);

    },

    lose2() {
        document.querySelector(".time").style.display = "flex";
        document.querySelector(".game").style.display = "none";
        this.music.stop()
        clearInterval(this.interval);
    },

}