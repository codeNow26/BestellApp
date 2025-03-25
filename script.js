function cartMenu() {
     document.getElementById('cart').style.display = "block";
    }

    function removeShoppingCart() {
        let a = document.getElementById("cart");
        if (a.style.display === "none") {
          a.style.display = "block";
        } else {
          a.style.display = "none";
        }
      } 