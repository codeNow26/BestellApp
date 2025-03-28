function addToCart() {
    let contentRef = document.getElementById('cart');
    contentRef.innerHTML += `<div class="hallo"> 
    <h3 class="cart-dish-title">
    ${myDishes.name}
    </h3> 
    <p>
    ${myDishes.description}
    </p> 
    <p class="orange-text">
    ${myDishes.price + "0€"}
    </p>
    </div>
    `
}

function addPrice() {

}




function addToTrash() {

}