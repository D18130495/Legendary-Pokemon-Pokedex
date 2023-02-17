(function() {
    window.onclick = function(event) {
        var heart = document.createElement("b");

        heart.onselectstart = new Function('event.returnValue = false');

        document.body.appendChild(heart).innerHTML = "🐾";

        heart.style.cssText = "position: fixed; left: -100%;";

        var f = 12,
            x = event.clientX - f / 2,
            y = event.clientY - f,
            c = randomColor(),
            a = 0.8,
            s = 1.2;

        var timer = setInterval(function() {
            if(a <= 0) {
                document.body.removeChild(heart);

                clearInterval(timer);
            }else {
                heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

                y--;
                a -= 0.016;
                s += 0.002;
            }
        }, 12)

    }

    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    }
}(window.jQuery))
