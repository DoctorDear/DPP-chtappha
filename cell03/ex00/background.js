const button = document.getElementById("bg-button");

const genColorFn = () => {
    let randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    let hexColor = `#${randomColor}`;

    // update the background color value
    document.getElementById("background-color").style.backgroundColor =
        hexColor;
};

button.addEventListener("click", genColorFn);
button.addEventListener("click", () => {
    console.log(`Button clicked!`);
});
