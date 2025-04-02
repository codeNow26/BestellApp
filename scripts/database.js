let myDishes = [
    {
        "name": "Spaghetti Carbonara",
        "price": 12.90,
        "amount": 1,
        "description": "mit Schinken und Käse"
    },
    {
        "name": "Spaghetti Bolognese",
        "price": 13.90,
        "amount": 1,
        "description": "Wasser"
    },
    {
      "name": "I hobs",
      "price": 2000.23,
      "amount": 1,
      "description": "YESSSSS"
  }
]

function changeAmount(i) {
    change = myDishes[i].amount;
    if (change === 0) {
        return;
    }
    else {
        for (let i = 1; i < 99; i++) {
            const element = myDishes[i];
            
        }
    }
    return change;

}

console.log(changeAmount(1))

