$(function () {
    const calculator = $("#calculator");
    const leftInput = $("#left");
    const rightInput = $("#right");
    const operatorInput = $("#operator");

    calculator.on("submit", function (event) {
        event.preventDefault();

        const leftText = leftInput.val().trim();
        const rightText = rightInput.val().trim();
        const left = Number(leftText);
        const right = Number(rightText);

        if (
            !/^\d+$/.test(leftText) ||
            !/^\d+$/.test(rightText) ||
            !Number.isSafeInteger(left) ||
            !Number.isSafeInteger(right)
        ) {
            alert("Error :(");
            return;
        }

        const operator = operatorInput.val();
        if ((operator === "/" || operator === "%") && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch (operator) {
            case "+":
                result = left + right;
                break;
            case "-":
                result = left - right;
                break;
            case "*":
                result = left * right;
                break;
            case "/":
                result = left / right;
                break;
            case "%":
                result = left % right;
                break;
        }

        alert(result);
        console.log(result);
    });

    setInterval(function () {
        alert("Please, use me...");
    }, 30000);
});
