$(function () {
    const button = $("#bg-button");
    let scale = 1;

    button.on("click", function () {
        const color = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
        $("#background-color").css("background-color", `#${color}`);
        scale += 0.2;
        button.css({
            "transform-origin": "left top",
            transform: `scale(${scale})`,
        });
        console.log("Button clicked!");
    });
});
