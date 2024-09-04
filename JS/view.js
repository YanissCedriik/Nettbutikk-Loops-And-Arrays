// Update HTML

const app = document.getElementById("app");

//--------------------------------------------------------
updateView()

function updateView() {
  app.innerHTML = /*HTML*/ ` 
  
  <div class="header">
  <img src="Assets/menylogo2.png">
  <div>Spiser du bedre, lever du bedre!</div>
  <div onclick="alert('This button will blow up your computer, are you sure you want to continue?                                                                                       Press Ok to continue.')"><img src="Assets/person-circle.svg">Logg inn</div>
  <div><img src="Assets/cart4.svg">Handlekruv</div>
  <div>Placeholder for totalPrice</div>
  <div><img src="Assets/list.svg"></div>
</div>

<div class="mainContainer">
  <div class="products">

      <div onclick="addProduct()" class="product">
          <img src="Assets/apple.webp">
          <p class="descriptionAndPrice">Apples <span>${generatePrice()}kr</span> </p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Asparagus.png">
          <p class="descriptionAndPrice">Asparagus <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Avocado.png">
          <p class="descriptionAndPrice">Avocado <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/banana.png">
          <p class="descriptionAndPrice">Banana <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/BellPepper.png">
          <p class="descriptionAndPrice">Bell Pepper <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Blueberry.png">
          <p class="descriptionAndPrice">Blueberry <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Broccoli.png">
          <p class="descriptionAndPrice">Broccoli <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Cantaloupe.png">
          <p class="descriptionAndPrice">Cantaloupe <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Carrot.png">
          <p class="descriptionAndPrice">Carrots <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Cauliflower.webp">
          <p class="descriptionAndPrice">Cauliflower <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Cherry.webp">
          <p class="descriptionAndPrice">Cherry <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Coconut.webp">
          <p class="descriptionAndPrice">Coconut <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Corn.png">
          <p class="descriptionAndPrice">Corn <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Cucumber.png">
          <p class="descriptionAndPrice">Cucumber <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Eggplant.png">
          <p class="descriptionAndPrice">Eggplant <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Garlic.webp">
          <p class="descriptionAndPrice">Garlic <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/grapes.png">
          <p class="descriptionAndPrice">Grapes <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Kale.png">
          <p class="descriptionAndPrice">Kale <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/kiwi.webp">
          <p class="descriptionAndPrice">Kiwi <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Lemon.png">
          <p class="descriptionAndPrice">Lemon <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Lime.png">
          <p class="descriptionAndPrice">Lime <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Mango.png">
          <p class="descriptionAndPrice">Mango <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Onion.webp">
          <p class="descriptionAndPrice">Onion <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/orange.png">
          <p class="descriptionAndPrice">Orange <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Papaya.png">
          <p class="descriptionAndPrice">Papaya <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Peach.png">
          <p class="descriptionAndPrice">Peach <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Peas.jpg">
          <p class="descriptionAndPrice">Peas <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/pineapple.png">
          <p class="descriptionAndPrice">Pineapple <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Plum.png">
          <p class="descriptionAndPrice">Plum <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Pomegranate.png">
          <p class="descriptionAndPrice">Pomegranate <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Potato.png">
          <p class="descriptionAndPrice">Potato <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Radish.png">
          <p class="descriptionAndPrice">Radish <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/rasberry.webp">
          <p class="descriptionAndPrice">Rasberry <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Spinach.png">
          <p class="descriptionAndPrice">Spinach <span>${generatePrice()}kr</span></p>
      </div>
      <div onclick="addProduct()" class="product">
          <img src="Assets/strawberry.webp">
          <p class="descriptionAndPrice">Strawberry <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Tomato.png">
          <p class="descriptionAndPrice">Tomato <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/watermelon.webp">
          <p class="descriptionAndPrice">Watermelon <span>${generatePrice()}kr</span></p>
      </div>

      <div onclick="addProduct()" class="product">
          <img src="Assets/Zucchini.jpg">
          <p class="descriptionAndPrice">Zucchini <span>${generatePrice()}kr</span></p>
      </div>
  </div>

</div>

  `;
}
