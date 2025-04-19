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

function generateCartItemHTML(i) {
    return `
        <div id="cart-wrapper-${i}" class="cart-wrapper">
          <div class=cart-title-trash><h3 class="cart-dish-title">${myDishes[i].name}</h3>
            <img onclick="addDishToTrash(${i})" class="trash-bin"  src="assets/icons/trash-bin.png"></div>
            <p id="price-counter-${i}">${myDishes[i].price.toFixed(2)}€</p>
            <div class="order-item">
                <img onclick="changeAmount(${i}, 'minus'), addPrice(${i}, 'minus'), addPriceToTotal()" class="change-amount-btn" src="./assets/icons/minus-kreisformiger-knopf.png" alt="Minus Button">
                <p id="amount-counter-${i}">${myDishes[i].amount}</p>
                <img onclick="changeAmount(${i}, 'plus'), addPrice(${i}, 'plus'), addPriceToTotal()" class="change-amount-btn" src="./assets/icons/plus.png">
                </div>
        </div>
    `;
}

function addCartItemToCart(html) {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML += html;
}


function order() {
    orderButton = document.getElementById('order-button');
    orderButtonText = document.getElementById('order-button-text');
    let cart = document.getElementsByClassName('cart-wrapper');
    for (let i = 0; i < cart.length; i++) {
        addDishToTrash(i);
    }
    orderButton.style.display = "none";
    orderButtonText.style.display = "block";
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

function DishClick(i) {
    addDishToCart(i);
    generateOrder();
    addPriceToTotal();
}

function showOverlay() {
  document.getElementById('shopping-cart').style.display = "block";
  document.getElementById('menu-wrapper').style.display = "none";
}