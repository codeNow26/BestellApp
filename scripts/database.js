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
        "name": "I hobs",
        "price": 2000.23,
        "amount": 1,
        "description": "YESSSSS"
    }
]

function changeAmount(i, operation) {
    let element = document.getElementById(`amount-counter-${i}`);
    let cart = document.getElementById("cart-wrapper");
    let amount = parseInt(element.innerText);
    if (operation == 'plus') {
        element.innerText = amount + 1;
    }

    if (operation == 'minus') {
        element.innerText = amount - 1;
    }
    if (operation == "minus") {
       cart.style.display = "none"
    }
}

// das gericht löschen wenn 0, mit display none ist geglücckt nur opoeration = minus ist falsch also korrigiere!
