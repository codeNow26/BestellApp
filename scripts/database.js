let myDishes = [
    {
        "name": "Spaghetti Carbonara",
        "description": "mit Schinken und Käse",
        "price": 12.90,
    },
    {
        "name": "sprudel",
        "description": "Wasser",
        "price": 13.90,
    }
]

console.log(myDishes.filter((element) => {return element['name'] == "sprudel"})
);

// am ende muss es true oder falls sein was beim return rauskommt

// return kann man beliebig erweitern
// beinhaltet der string von dem Namen etwas was ich zum beispiel in ein suchfeld eingegeben habe? als beispiel   