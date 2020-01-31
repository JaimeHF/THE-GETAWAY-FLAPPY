const scoreboard = {
    ctx: undefined,
  
    init(ctx) {
      this.ctx = ctx;
      this.ctx.font = `50px Sigmar One`;
    },
  
    update(score) {
      this.ctx.fillStyle = "rgb(0, 255, 0)";
      this.ctx.fillText(Math.floor(score), 20, 50);
    }
  };