let myDishes = [
    {
        "name": "Bibimbap",
        "price": 12.90,
        "value": 12.90,
        "amount": 1,
        "description": "Reis mit Gemüse, Ei, Fleisch, scharfer Sauce (Gochujang)"
    },
    {
        "name": "Dakgalbi",
        "price": 13.90,
        "value": 13.90,
        "amount": 1,
        "description": "Wasser"
    },
    {
        "name": "Bulgogi",
        "price": 14.90,
        "value": 14.90,
        "amount": 1,
        "description": "YESSSSS"
    },
    {
        "name": "Tteokbokki",
        "price": 4.90,
        "value": 4.90,
        "amount": 1,
        "description": "was los"
    },
    {
        "name": "Mandu",
        "price": 22.90,
        "value": 22.90,
        "amount": 1,
        "description": "was los"
    },
    {
        "name": "Eomuk",
        "price": 5.90,
        "value": 5.90,
        "amount": 1,
        "description": "was los"
    },
    {
        "name": "Kimchi",
        "price": 3.90,
        "value": 3.90,
        "amount": 1,
        "description": "was los"
    },
    {
        "name": "Oi Muchim",
        "price": 3.90,
        "value": 3.90,
        "amount": 1,
        "description": "was los"
    },
    {
        "name": "Gamja Jorim",
        "price": 4.90,
        "value": 4.90,
        "amount": 1,
        "description": "was los"
    },
]

function changeAmount(i, operation) {
    let element = document.getElementById(`amount-counter-${i}`);
    let cart = document.getElementById(`cart-wrapper-${i}`);
    let amount = parseInt(element.innerText);;
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

function addPrice(i, operation) {
    let price = document.getElementById(`price-counter-${i}`);
    if (operation == 'plus') {
        myDishes[i].price += myDishes[i].value;
        myDishes[i].price = parseFloat(myDishes[i].price.toFixed(2));
        price.innerText = myDishes[i].price.toFixed(2) + "€";
        return;
    }
    if (operation == 'minus') {
        myDishes[i].price -= myDishes[i].value
        price.innerText = myDishes[i].price.toFixed(2) + "€";
        return;
    }
}

function addDishToTrash(i) {
    let cartItem = document.getElementById(`cart-wrapper-${i}`);
    let element = document.getElementById(`amount-counter-${i}`);
    let priceView = document.getElementById('total');
    if (  myDishes[i].price = 0) {
        priceView.style.display = 'none';
    }
    cartItem.style.display = 'none';
    myDishes[i].price = 0;
    element.innerText = 1;
    addPriceToTotal();
}

function addPriceToTotal() {

    let price = document.getElementById('total');
    let cart = document.getElementsByClassName('cart-wrapper');
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].style.display !== 'none') {
            total += myDishes[i].price;
        }
    }
    total = Math.round(total * 100) / 100;
    if (total > 0) {
        price.style.display = "block";
    } else {
        price.style.display = "none";
    }
    price.innerText = "Total: " + total.toFixed(2) + "€";
    addPrice();
}