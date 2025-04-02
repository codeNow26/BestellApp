

function addDishToCart(i) {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML +=
        `
    <h3 class="cart-dish-title">${myDishes[i].name}</h3>
    <p>${myDishes[i].price}0€</p>
    <div class="order-item">
     <img class="change-amount-btn" src="./assets/icons/minus-kreisformiger-knopf.png" alt="Minus Button" class="cart-dish-remove">
     <p>${myDishes[i].amount}</p>
     <img onclick="changeAmount(i)" class="change-amount-btn" src="./assets/icons/plus.png">
    </div>
     `
}

// check onclick bei plus



function addPrice() {

}




function addToTrash() {

}




// img to display and none als nächstes