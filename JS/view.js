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
  <div>Placeholder for totalPrice</div>
  <div><img src="Assets/list.svg"></div>
</div>

    <div class="offCanvasSideBar">

        <div class="offCanvasSideBarHeader"><img src="Assets/cart4.svg">Handlekurv</div>
        <div class="offCanvasSideBarPrice">Place items you want to buy in the shoppingcart.</div>

        <div class="offCanvasSideBarProducts">Products</div>
        <div class="offCanvasSideBarPrice" id="outputProducts"></div>
        <div class="offCanvasSideBarPrice">Totalt å betale: ${sumPrice}</div>
        <div onclick="updateView()" class="offCanvasSideBarCheckout">Checkout</div>

    </div>


<div class="mainContainer">
  <div class="products">

      <div onclick="addProduct(0, price(0))" class="product">
          <img src="Assets/apple.webp">
          <p class="descriptionAndPrice">Apples <span>${price(0)}kr</span> </p>
      </div>

      <div onclick="addProduct(1)" class="product">
          <img src="Assets/Asparagus.png">
          <p class="descriptionAndPrice">Asparagus <span>${price(1)}kr</span></p>
      </div>

      <div onclick="addProduct(2)" class="product">
          <img src="Assets/Avocado.png">
          <p class="descriptionAndPrice">Avocado <span>${price(2)}kr</span></p>
      </div>

      <div onclick="addProduct(3)" class="product">
          <img src="Assets/banana.png">
          <p class="descriptionAndPrice">Banana <span>${price(3)}kr</span></p>
      </div>

      <div onclick="addProduct(4)" class="product">
          <img src="Assets/BellPepper.png">
          <p class="descriptionAndPrice">Bell Pepper <span>${price(4)}kr</span></p>
      </div>

      <div onclick="addProduct(5)" class="product">
          <img src="Assets/Blueberry.png">
          <p class="descriptionAndPrice">Blueberry <span>${price(5)}kr</span></p>
      </div>

      <div onclick="addProduct(6)" class="product">
          <img src="Assets/Broccoli.png">
          <p class="descriptionAndPrice">Broccoli <span>${price(6)}kr</span></p>
      </div>

      <div onclick="addProduct(7)" class="product">
          <img src="Assets/Cantaloupe.png">
          <p class="descriptionAndPrice">Cantaloupe <span>${price(7)}kr</span></p>
      </div>

      <div onclick="addProduct(8)" class="product">
          <img src="Assets/Carrot.png">
          <p class="descriptionAndPrice">Carrots <span>${price(8)}kr</span></p>
      </div>

      <div onclick="addProduct(9)" class="product">
          <img src="Assets/Cauliflower.webp">
          <p class="descriptionAndPrice">Cauliflower <span>${price(9)}kr</span></p>
      </div>

      <div onclick="addProduct(10)" class="product">
          <img src="Assets/Cherry.webp">
          <p class="descriptionAndPrice">Cherry <span>${price(10)}kr</span></p>
      </div>

      <div onclick="addProduct(11)" class="product">
          <img src="Assets/Coconut.webp">
          <p class="descriptionAndPrice">Coconut <span>${price(11)}kr</span></p>
      </div>

      <div onclick="addProduct(12)" class="product">
          <img src="Assets/Corn.png">
          <p class="descriptionAndPrice">Corn <span>${price(12)}kr</span></p>
      </div>

      <div onclick="addProduct(13)" class="product">
          <img src="Assets/Cucumber.png">
          <p class="descriptionAndPrice">Cucumber <span>${price(13)}kr</span></p>
      </div>

      <div onclick="addProduct(14)" class="product">
          <img src="Assets/Eggplant.png">
          <p class="descriptionAndPrice">Eggplant <span>${price(14)}kr</span></p>
      </div>

      <div onclick="addProduct(15)" class="product">
          <img src="Assets/Garlic.webp">
          <p class="descriptionAndPrice">Garlic <span>${price(15)}kr</span></p>
      </div>

      <div onclick="addProduct(16)" class="product">
          <img src="Assets/grapes.png">
          <p class="descriptionAndPrice">Grapes <span>${price(16)}kr</span></p>
      </div>

      <div onclick="addProduct(17)" class="product">
          <img src="Assets/Kale.png">
          <p class="descriptionAndPrice">Kale <span>${price(17)}kr</span></p>
      </div>

      <div onclick="addProduct(18)" class="product">
          <img src="Assets/kiwi.webp">
          <p class="descriptionAndPrice">Kiwi <span>${price(18)}kr</span></p>
      </div>

      <div onclick="addProduct(19)" class="product">
          <img src="Assets/Lemon.png">
          <p class="descriptionAndPrice">Lemon <span>${price(19)}kr</span></p>
      </div>

      <div onclick="addProduct(20)" class="product">
          <img src="Assets/Lime.png">
          <p class="descriptionAndPrice">Lime <span>${price(20)}kr</span></p>
      </div>

      <div onclick="addProduct(21)" class="product">
          <img src="Assets/Mango.png">
          <p class="descriptionAndPrice">Mango <span>${price(21)}kr</span></p>
      </div>

      <div onclick="addProduct(22)" class="product">
          <img src="Assets/Onion.webp">
          <p class="descriptionAndPrice">Onion <span>${price(22)}kr</span></p>
      </div>

      <div onclick="addProduct(23)" class="product">
          <img src="Assets/orange.png">
          <p class="descriptionAndPrice">Orange <span>${price(23)}kr</span></p>
      </div>

      <div onclick="addProduct(24)" class="product">
          <img src="Assets/Papaya.png">
          <p class="descriptionAndPrice">Papaya <span>${price(24)}kr</span></p>
      </div>

      <div onclick="addProduct(25)" class="product">
          <img src="Assets/Peach.png">
          <p class="descriptionAndPrice">Peach <span>${price(25)}kr</span></p>
      </div>

      <div onclick="addProduct(26)" class="product">
          <img src="Assets/Peas.jpg">
          <p class="descriptionAndPrice">Peas <span>${price(26)}kr</span></p>
      </div>

      <div onclick="addProduct(27)" class="product">
          <img src="Assets/pineapple.png">
          <p class="descriptionAndPrice">Pineapple <span>${price(27)}kr</span></p>
      </div>

      <div onclick="addProduct(28)" class="product">
          <img src="Assets/Plum.png">
          <p class="descriptionAndPrice">Plum <span>${price(28)}kr</span></p>
      </div>

      <div onclick="addProduct(29)" class="product">
          <img src="Assets/Pomegranate.png">
          <p class="descriptionAndPrice">Pomegranate <span>${price(29)}kr</span></p>
      </div>

      <div onclick="addProduct(30)" class="product">
          <img src="Assets/Potato.png">
          <p class="descriptionAndPrice">Potato <span>${price(30)}kr</span></p>
      </div>

      <div onclick="addProduct(31)" class="product">
          <img src="Assets/Radish.png">
          <p class="descriptionAndPrice">Radish <span>${price(31)}kr</span></p>
      </div>

      <div onclick="addProduct(32)" class="product">
          <img src="Assets/rasberry.webp">
          <p class="descriptionAndPrice">Rasberry <span>${price(32)}kr</span></p>
      </div>

      <div onclick="addProduct(33)" class="product">
          <img src="Assets/Spinach.png">
          <p class="descriptionAndPrice">Spinach <span>${price(33)}kr</span></p>
      </div>
      <div onclick="addProduct(34)" class="product">
          <img src="Assets/strawberry.webp">
          <p class="descriptionAndPrice">Strawberry <span>${price(34)}kr</span></p>
      </div>

      <div onclick="addProduct(35)" class="product">
          <img src="Assets/Tomato.png">
          <p class="descriptionAndPrice">Tomato <span>${price(35)}kr</span></p>
      </div>

      <div onclick="addProduct(36)" class="product">
          <img src="Assets/watermelon.webp">
          <p class="descriptionAndPrice">Watermelon <span>${price(36)}kr</span></p>
      </div>

      <div onclick="addProduct(37)" class="product">
          <img src="Assets/Zucchini.jpg">
          <p class="descriptionAndPrice">Zucchini <span>${price(37)}kr</span></p>
      </div>
  </div>

</div>

  `;
}
