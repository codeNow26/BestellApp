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