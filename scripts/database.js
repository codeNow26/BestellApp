let myDishes = [
    {
        "name": "Spaghetti Carbonara",
        "price": 12.90,
        "description": "mit Schinken und Käse"
    },
    {
        "name": "Spaghetti Bolognese",
        "price": 13.90,
        "description": "Wasser"
    },
    {
      "name": "I hobs",
      "price": 2000.23,
      "description": "YESSSSS"
  }
]

 let dishy = myDishes.filter((element) => { return element['name'] == "Spaghetti Carbonara" });

 console.log(Object.values(myDishes[0]));
