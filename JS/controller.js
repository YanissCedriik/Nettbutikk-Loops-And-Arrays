//Functions
let price = generatePrice();

function generatePrice(min, max) {
    return (Math.random() * (100 - 8) +8).toFixed(2);
  }

  