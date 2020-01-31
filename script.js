window.onload = function () {
    document.getElementById("start").onclick = function () {
        document.querySelector(".botton").style.display = "none";
        document.querySelector(".game").style.display="flex"

        game.init()
    };
    document.getElementById("try").onclick = function () {
        document.querySelector(".botton").style.display = "none";
        document.querySelector(".game").style.display="flex"

        game.init()
    };
    document.getElementById("again").onclick = function () {
        document.querySelector(".botton").style.display = "none";
        document.querySelector(".game").style.display="flex"

        game.init()
    };

    document.getElementById("time").onclick = function () {
        document.querySelector(".botton").style.display = "none";
        document.querySelector(".game").style.display="flex"

        game.init()
    };


    document.getElementById("ini").onclick = function () {
        document.querySelector(".botton").style.display = "none";
        window.location= './index.html';
       
    };
};