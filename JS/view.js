// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView();

function updateView() {
  app.innerHTML = /*HTML*/ ` 
  
  <div class="header">
  <img src="Assets/menylogo2.png">
  <div>Spiser du bedre, lever du bedre!</div>
  <div onclick="alert('This button will blow up your computer, are you sure you want to continue?                                                                                       Press Ok to continue.')"><img src="Assets/person-circle.svg">Logg inn</div>
  <div onclick="openSideBar()"><img src="Assets/cart4.svg">Handlekurv</div>
  <div id="outputPriceHeader">SUM Varer : 0 NOK</div>
  <div><img src="Assets/list.svg"></div>
</div>

    <div class="offCanvasSideBar">

        <div class="offCanvasSideBarHeader"><img src="Assets/cart4.svg">Handlekurv</div>
        <div class="offCanvasSideBarPrice">Place items you want to buy in the shoppingcart.</div>

        <div class="offCanvasSideBarProducts">Products</div>
        <div class="offCanvasSideBarPrice" id="outputProducts"></div>
        <div  id="outputPrice" class="offCanvasSideBarPrice">Totalt å betale : 0 NOK</div>
        <div onclick="updateView()" class="offCanvasSideBarCheckout">Checkout</div>

    </div>


<div class="mainContainer">
  <div class="products">

      <div onclick="addProduct(0)" class="product">
          <img src="Assets/apple.webp">
          <p class="descriptionAndPrice">Apples <span>12.50 NOK</span> </p>
      </div>

      <div onclick="addProduct(1)" class="product">
          <img src="Assets/Asparagus.png">
          <p class="descriptionAndPrice">Asparagus <span>7.20 NOK</span></p>
      </div>

      <div onclick="addProduct(2)" class="product">
          <img src="Assets/Avocado.png">
          <p class="descriptionAndPrice">Avocado <span>15.80 NOK</span></p>
      </div>

      <div onclick="addProduct(3)" class="product">
          <img src="Assets/banana.png">
          <p class="descriptionAndPrice">Banana <span>9.90 NOK</span></p>
      </div>

      <div onclick="addProduct(4)" class="product">
          <img src="Assets/BellPepper.png">
          <p class="descriptionAndPrice">Bell Pepper <span>13.45 NOK</span></p>
      </div>

      <div onclick="addProduct(5)" class="product">
          <img src="Assets/Blueberry.png">
          <p class="descriptionAndPrice">Blueberry <span>8.25 NOK</span></p>
      </div>

      <div onclick="addProduct(6)" class="product">
          <img src="Assets/Broccoli.png">
          <p class="descriptionAndPrice">Broccoli <span>10.75 NOK</span></p>
      </div>

      <div onclick="addProduct(7)" class="product">
          <img src="Assets/Cantaloupe.png">
          <p class="descriptionAndPrice">Cantaloupe <span>5.60 NOK</span></p>
      </div>

      <div onclick="addProduct(8)" class="product">
          <img src="Assets/Carrot.png">
          <p class="descriptionAndPrice">Carrots <span>14.30 NOK</span></p>
      </div>

      <div onclick="addProduct(9)" class="product">
          <img src="Assets/Cauliflower.webp">
          <p class="descriptionAndPrice">Cauliflower <span>6.80 NOK</span></p>
      </div>

      <div onclick="addProduct(10)" class="product">
          <img src="Assets/Cherry.webp">
          <p class="descriptionAndPrice">Cherry <span>11.10 NOK</span></p>
      </div>

      <div onclick="addProduct(11)" class="product">
          <img src="Assets/Coconut.webp">
          <p class="descriptionAndPrice">Coconut <span>19.90 NOK</span></p>
      </div>

      <div onclick="addProduct(12)" class="product">
          <img src="Assets/Corn.png">
          <p class="descriptionAndPrice">Corn <span>17.40 NOK</span></p>
      </div>

      <div onclick="addProduct(13)" class="product">
          <img src="Assets/Cucumber.png">
          <p class="descriptionAndPrice">Cucumber <span>8.90 NOK</span></p>
      </div>

      <div onclick="addProduct(14)" class="product">
          <img src="Assets/Eggplant.png">
          <p class="descriptionAndPrice">Eggplant <span>4.60 NOK</span></p>
      </div>

      <div onclick="addProduct(15)" class="product">
          <img src="Assets/Garlic.webp">
          <p class="descriptionAndPrice">Garlic <span>21.25 NOK</span></p>
      </div>

      <div onclick="addProduct(16)" class="product">
          <img src="Assets/grapes.png">
          <p class="descriptionAndPrice">Grapes <span>16.75 NOK</span></p>
      </div>

      <div onclick="addProduct(17)" class="product">
          <img src="Assets/Kale.png">
          <p class="descriptionAndPrice">Kale <span>9.05 NOK</span></p>
      </div>

      <div onclick="addProduct(18)" class="product">
          <img src="Assets/kiwi.webp">
          <p class="descriptionAndPrice">Kiwi <span>12.00 NOK</span></p>
      </div>

      <div onclick="addProduct(19)" class="product">
          <img src="Assets/Lemon.png">
          <p class="descriptionAndPrice">Lemon <span>18.60 NOK</span></p>
      </div>

      <div onclick="addProduct(20)" class="product">
          <img src="Assets/Lime.png">
          <p class="descriptionAndPrice">Lime <span>10.20 NOK</span></p>
      </div>

      <div onclick="addProduct(21)" class="product">
          <img src="Assets/Mango.png">
          <p class="descriptionAndPrice">Mango <span>14.90 NOK</span></p>
      </div>

      <div onclick="addProduct(22)" class="product">
          <img src="Assets/Onion.webp">
          <p class="descriptionAndPrice">Onion <span>20.00 NOK</span></p>
      </div>

      <div onclick="addProduct(23)" class="product">
          <img src="Assets/orange.png">
          <p class="descriptionAndPrice">Orange <span>11.50 NOK</span></p>
      </div>

      <div onclick="addProduct(24)" class="product">
          <img src="Assets/Papaya.png">
          <p class="descriptionAndPrice">Papaya <span>17.85 NOK</span></p>
      </div>

      <div onclick="addProduct(25)" class="product">
          <img src="Assets/Peach.png">
          <p class="descriptionAndPrice">Peach <span>8.15 NOK</span></p>
      </div>

      <div onclick="addProduct(26)" class="product">
          <img src="Assets/Peas.jpg">
          <p class="descriptionAndPrice">Peas <span>15.00 NOK</span></p>
      </div>

      <div onclick="addProduct(27)" class="product">
          <img src="Assets/pineapple.png">
          <p class="descriptionAndPrice">Pineapple <span>12.90 NOK</span></p>
      </div>

      <div onclick="addProduct(28)" class="product">
          <img src="Assets/Plum.png">
          <p class="descriptionAndPrice">Plum <span>18.25 NOK</span></p>
      </div>

      <div onclick="addProduct(29)" class="product">
          <img src="Assets/Pomegranate.png">
          <p class="descriptionAndPrice">Pomegranate <span>10.85 NOK</span></p>
      </div>

      <div onclick="addProduct(30)" class="product">
          <img src="Assets/Potato.png">
          <p class="descriptionAndPrice">Potato <span>13.99 NOK</span></p>
      </div>

      <div onclick="addProduct(31)" class="product">
          <img src="Assets/Radish.png">
          <p class="descriptionAndPrice">Radish <span>5.20 NOK</span></p>
      </div>

      <div onclick="addProduct(32)" class="product">
          <img src="Assets/rasberry.webp">
          <p class="descriptionAndPrice">Rasberry <span>16.00 NOK</span></p>
      </div>

      <div onclick="addProduct(33)" class="product">
          <img src="Assets/Spinach.png">
          <p class="descriptionAndPrice">Spinach <span>11.75 NOK</span></p>
      </div>
      <div onclick="addProduct(34)" class="product">
          <img src="Assets/strawberry.webp">
          <p class="descriptionAndPrice">Strawberry <span>19.50 NOK</span></p>
      </div>

      <div onclick="addProduct(35)" class="product">
          <img src="Assets/Tomato.png">
          <p class="descriptionAndPrice">Tomato <span>8.45 NOK</span></p>
      </div>

      <div onclick="addProduct(36)" class="product">
          <img src="Assets/watermelon.webp">
          <p class="descriptionAndPrice">Watermelon <span>69.00 NOK</span></p>
      </div>

      <div onclick="addProduct(37)" class="product">
          <img src="Assets/Zucchini.jpg">
          <p class="descriptionAndPrice">Zucchini <span>20.75 NOK</span></p>
      </div>
  </div>

</div>

  `;
}
