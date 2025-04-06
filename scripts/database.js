let myDishes = [
    {
        "name": "Spaghetti Carbonara",
        "price": 12.90,
        "amount": 1,
        "description": "mit Schinken und Käse"
    },
    {
        "name": "Spaghetti Bolognese",
        "price": 13.90,
        "amount": 1,
        "description": "Wasser"
    },
    {
        "name": "Spaghetti alio",
        "price": 2000.23,
        "amount": 1,
        "description": "YESSSSS"
    }
]

function changeAmount(i, operation) {
    let element = document.getElementById(`amount-counter-${i}`);
    let cart = document.getElementById(`cart-wrapper-${i}`);
    let amount = parseInt(element.innerText);
    if (operation == 'plus') {
        element.innerText = amount + 1;
    }

    if (operation == 'minus') {
        if (amount === 1) {
            cart.style.display = "none";
            return;
        }
        element.innerText = amount - 1;
    }
}

function addPriceToTotal(i) {
 let price = document.getElementById(`price-counter-${i}`)
 return price * 2;
}