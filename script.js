

function addDishToCart(i) {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML += 
    `
    <h3 class="cart-dish-title">${Object.values(myDishes[i].name).join("")}</h3>
     <p>${myDishes[i].price}0€</p>
     `
}

function addPrice() {

}




function addToTrash() {

}




// img to display and none als nächstes