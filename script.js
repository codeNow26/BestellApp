function addDishToCart(i) {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML +=
        `
        <div id="cart-wrapper">
    <h3 class="cart-dish-title">${myDishes[i].name}</h3>
    <p>${myDishes[i].price}0€</p>
    <div class="order-item">
     <img onclick="changeAmount(${i}, 'minus')" class="change-amount-btn" src="./assets/icons/minus-kreisformiger-knopf.png" alt="Minus Button">
     <p id="amount-counter-${i}">${myDishes[i].amount}</p>
     <img onclick="changeAmount(${i}, 'plus')" class="change-amount-btn" src="./assets/icons/plus.png">
    </div>
    </div>
     `
}
