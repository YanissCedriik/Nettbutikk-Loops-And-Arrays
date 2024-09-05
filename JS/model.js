//Variables

const fruits = ["Apples", "Asparagus", "Avocado", "Banana", "Bell Pepper", "Blueberry", "Broccoli", 
    "Cantaloupe", "Carrots", "Cauliflower", "Cherry", "Coconut", "Corn", "Cucumber", "Eggplant", 
    "Garlic", "Grapes", "Kale", "Kiwi", "Lemon", "Lime", "Mango", "Onion", "Orange", "Papaya", "Peach", "Peas",
    "Pineapple", "Plum", "Pomegranate", "Potato", "Radish", "Rasberry", "Spinach", "Strawberry", "Tomato",
    "Watermelon", "Zucchini"]

    console.log(fruits.length)


    let productPrice = 0;
    // let price = (parametera) => expression <----- Lambada funksjon
    let price = () => (Math. random() * (100 - 8) +8).toFixed(2); 
    let staticPrice;
    // price(parameter1); 

    let totalPrice = 0;
    let sumPrice = (a) => totalPrice += a;