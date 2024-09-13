let game = {
    start: function() {
        this.ctx = document.getElementById("mycanvas").getContext("2d");
        let backgrond = new Image();
        backgrond.src = "img/background.png";
        window.requestAnimationFrame(() => {
            this.ctx.drawImage(backgrond, 0, 0);
        });
    }
};

window.addEventListener("load", () => {
    game.start();
});