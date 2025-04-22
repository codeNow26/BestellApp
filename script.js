function reloadPage() {
    window.location.href = '/';
}

function addDishToCart(i) {
    let cartItem = document.getElementById(`cart-wrapper-${i}`);
    if (cartItem) {
        if (cartItem.style.display === 'none') {
            showCartItem(i);
            addPrice(i, 'plus');
        } else {
            changeAmount(i, 'plus');
            addPrice(i, 'plus');
        }
    } else {
        createCartItem(i);
    }
}

function showCartItem(i) {
    let cartItem = document.getElementById(`cart-wrapper-${i}`);
    cartItem.style.display = 'block';
}

function createCartItem(i) {
    let cartItemHTML = generateCartItemHTML(i);
    addCartItemToCart(cartItemHTML);
    showCartItem(i);
}

function addCartItemToCart(html) {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML += html;
}

function order() {
    orderButton = document.getElementById('order-button');
    orderButtonText = document.getElementById('order-button-text');
    for (let i = 0; i < myDishes.length; i++) {
        let cartItem = document.getElementById(`cart-wrapper-${i}`)
        if (cartItem) {
            addDishToTrash(i);
        }
        orderButton.style.display = "none";
        orderButtonText.style.display = "block";
    }
}

function generateOrder() {
    orderButtonText = document.getElementById('order-button-text');
    orderButton = document.getElementById('order-button');
    orderButton.innerHTML = `
    <button onclick="order()" class="order-btn">Bezahlen</button>`;
    if (orderButton.style.display === 'none') {
        orderButton.style.display = 'block';
    }
    orderButtonText.style.display = 'none';
}

function dishClick(i) {
    addDishToCart(i);
    generateOrder();
    addPriceToTotal();
}

function showOverlay() {
    let cart = document.getElementById('shopping-cart');
    let menu = document.getElementById('menu-wrapper');
    if (cart.style.display == 'block') {
        cart.style.display = 'none';
        menu.style.display = 'block';
    } else {
        cart.style.display = 'block';
        menu.style.display = 'none';
    }
    if (window.innerWidth > 680)
        cart.style.display = 'block';
}


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
    cartItem.style.display = 'none';
    myDishes[i].price = 0;
    element.innerText = 1;
    addPriceToTotal();
}

function addPriceToTotal() {
    let total = calculateTotal();
    updatePriceDisplay(total);
    addPrice();
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < myDishes.length; i++) {
        if (document.getElementById(`cart-wrapper-${i}`)) {
            total += myDishes[i].price;
        }
    }
    return Math.round(total * 100) / 100;
}

function updatePriceDisplay(total) {
    let price = document.getElementById('total');
    let orderButton = document.getElementById('order-button');
    price.innerText = "Gesamt: " + total.toFixed(2) + "€";
    if (total > 0) {
        price.style.display = "block";
        orderButton.style.display = "block";
    } else {
        price.style.display = "none";
        orderButton.style.display = "none";
    }
}
