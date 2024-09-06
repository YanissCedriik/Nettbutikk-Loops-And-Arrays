//Functions
//let price = generatePrice();

function generatePrice() {
  return (Math.random() * (100 - 8) + 8).toFixed(2);
}

function openSideBar() {
  document
    .getElementsByClassName("offCanvasSideBar")[0]
    .classList.toggle("active");
}

function addProduct(i) {
  document.getElementById("outputProducts").innerHTML += /*HTML*/ `
    <div>${fruits[i]} ${price[i]} kr</div>
  `;
  totalPrice += price[i];
  
  document.getElementById('outputPrice').innerHTML = /*HMTL*/ `
    Totalt å betale : ${totalPrice} NOK 
  `

  document.getElementById('outputPriceHeader').innerHTML = /*HMTL*/ `
    SUM Varer : ${totalPrice} NOK 
  `

}