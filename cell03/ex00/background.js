const button = document.getElementById("bg-button");
let scale = 1;
const genColorFn = () => {
    let randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    let hexColor = `#${randomColor}`;

    // update the background color value
    document.getElementById("background-color").style.backgroundColor =
        hexColor;
};

const scaleBtn = () => {
    scale += 0.2;
    button.style.transformOrigin = "left top";
    button.style.transform = `scale(${scale})`;
};

button.addEventListener("click", genColorFn);
button.addEventListener("click", scaleBtn);
button.addEventListener("click", () => {
    console.log(`Button clicked!`);
});
