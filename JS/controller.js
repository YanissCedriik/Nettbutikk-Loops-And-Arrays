//Functions
//let price = generatePrice();

//function generatePrice() {
//    return (Math.random() * (100 - 8) +8).toFixed(2);
//  }



  function openSideBar(){
    document.getElementsByClassName('offCanvasSideBar')[0].classList.toggle("active");
  }

function addProduct(i){
  staticPrice = price(price);
  
  document.getElementById('outputProducts').innerHTML += /*HTML*/ `
    <div>${fruits[i]} ${staticPrice}kr</div>
  `
}

