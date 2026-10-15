(() => {
    const button = document.querySelector("#coffee-random-button");
    const coffeeName = document.querySelector("#coffee-name");
    const description = document.querySelector("#coffee-description");
    const orderContainer = document.querySelector("#coffee-order-container");
    const order = document.querySelector("#coffee-order");
    const image = document.querySelector("#coffee-image");

    if (!button || !coffeeName || !description || !orderContainer || !order || !image) {
        return;
    }

    let previousCoffeeId = null;

    button.addEventListener("click", () => {
        const options = coffeeMenus.filter((coffee) => coffee.id !== previousCoffeeId);
        const coffee = options[Math.floor(Math.random() * options.length)];

        coffeeName.textContent = coffee.name;
        description.textContent = coffee.description;
        order.textContent = coffee.order;
        orderContainer.hidden = false;
        image.src = coffee.image;
        image.alt = coffee.alt;
        previousCoffeeId = coffee.id;
    });
})();
