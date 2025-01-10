
//DATA STRUCTURE
/*
syntax for data attribue
Data attribute is just an html attribute
-have to start with "data-"
-then give it any name

name                         value
<data-[product-name]   =   ${product.name}>
     kabel case
*/
/*
const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{
        stars:4.5,
        count: 87
    },
    priceInCents: 1090
},{
    image:'images/products/intermediate-composite-basketball.jpg',
    name:'Intermediate Size Basketbal',
    rating:{
        stars:4,
        count: 127
    },
    priceInCents:2095
},{
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{
        stars: 4.5,
        count: 56
    },
    priceInCents:799
}]
*/


let productHtml = ""
products.forEach((product)=>{
    productHtml += `
         <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
             ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
           ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-name="${product.id}>
            Add to Cart
          </button>
        </div>
    `;

}
)


document.querySelector('.js-product-grid')
  .innerHTML=productHtml;

//Add To Cart
document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click',()=>{
      const productId = button-dataset.productId;
      let matchingItem;

      //Loop Through The Cart To see if the Id matches any item in the cart first
      cart.forEach((item)=>{
        if(productId === item.productId){
          matchingItem = item;
        }
      })
      //if its a matching item then the quantity is increase by 1
      if (matchingItem){
        matchingItem.quantity +=1
      }else{
        //if its not a matching item then the item is added to the cart
        cart.push({
          productName:productId,
          quantity:1
        })
      };

    });
  });
  