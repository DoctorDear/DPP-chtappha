$(function () {
    const balloon = $("#balloon");
    const colors = ["red", "green", "blue"];
    let size = 200;
    let colorIndex = 0;

    function updateBalloon() {
        balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            "background-color": colors[colorIndex],
        });
    }

    balloon.on("click", function () {
        size += 10;
        if (size > 420) {
            size = 200;
            colorIndex = 0;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        updateBalloon();
    });

    balloon.on("mouseleave", function () {
        size = Math.max(200, size - 5);
        colorIndex = (colorIndex + colors.length - 1) % colors.length;
        updateBalloon();
    });
});
