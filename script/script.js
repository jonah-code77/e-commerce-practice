
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

import {cart,addToCart} from '../data/cart.js'
import { products } from '../data/products.js';
import { formatCurrency } from './utills/money.js';

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
           ${formatCurrency(product.priceCents / 100)}
          </div>

          <div class="product-quantity-container">
            <select class = "js-quantity-selector-${product.id}">
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

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button 
          button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;

}
)



function updateCart(){
  //variable to store the total number of cartQuantity
  let cartQuantity = 0;
  //loop through the cart to add the quantity together
  cart.forEach((carItem) => {
    cartQuantity += carItem.quantity;
  });
  document.querySelector('.js-cart-quantity')
    .innerHTML=cartQuantity;

}

document.querySelector('.js-product-grid')
  .innerHTML=productHtml;

//Add To Cart

document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    let addedMessageTimeoutId;
    button.addEventListener('click',()=>{
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCart();

      const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
        );

        addedMessage.classList.add('added-to-cart-visible');

        if (addedMessageTimeoutId) {
          clearTimeout(addedMessageTimeoutId);
        }

        const timeoutId = setTimeout(() => {
          addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);

        addedMessageTimeoutId = timeoutId;
    });
  });
 
  