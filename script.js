function addDishToCart(i) {
    let cartItem = document.getElementById(`cart-wrapper-${i}`);
    if (cartItem) {
        if (cartItem.style.display === 'none') {
            showCartItem(i);
        } else {
            changeAmount(i, 'plus');
        }
    } else {
        createCartItem(i);
    }
}

function showCartItem(i) {
    let cartItem = document.getElementById(`cart-wrapper-${i}`);
    cartItem.style.display = 'block';
    document.getElementById(`amount-counter-${i}`).innerText = 1;
}

function createCartItem(i) {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML += `
        <div id="cart-wrapper-${i}" class="cart-wrapper">
            <h3 class="cart-dish-title">${myDishes[i].name}</h3>
            <p id="price-counter">${myDishes[i].price}0€</p>
            <div class="order-item">
                <img onclick="changeAmount(${i}, 'minus')" class="change-amount-btn" src="./assets/icons/minus-kreisformiger-knopf.png" alt="Minus Button">
                <p id="amount-counter-${i}">${myDishes[i].amount}</p>
                <img onclick="changeAmount(${i}, 'plus')" class="change-amount-btn" src="./assets/icons/plus.png">
            </div>
        </div>
    `;
    showCartItem(i);
}