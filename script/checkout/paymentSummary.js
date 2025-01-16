import {cart,calculateCartQuantity} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryoptions.js';
import { formatCurrency } from '../utills/money.js';
import { addOrder } from '../../data/orders.js';


export function renderPaymentSummary(){
    let productPricecent = 0;
    let shippingPriceCent = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPricecent += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCent += deliveryOption.priceCents;
  });

  const totalBeforeTaxCent = productPricecent + shippingPriceCent;
  const taxCent = totalBeforeTaxCent * 0.1;
  const totalCent = totalBeforeTaxCent + taxCent;

  const paymentSummaryHtml =`
            <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row ">
                <div class="js-payment-item"></div>
                <div class="payment-summary-money">
                ${formatCurrency(productPricecent)}
                </div>
            </div>

            <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">
                ${formatCurrency(shippingPriceCent)}
                </div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">${formatCurrency(totalBeforeTaxCent)}</div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div class="payment-summary-money">${formatCurrency(taxCent)}</div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">${formatCurrency(totalCent)}</div>
            </div>

            <button class="place-order-button button-primary
            js-place-order">
                Place your order
            </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHtml;
        
  //To calculate the number of item in the cart
    function cartNumber(){
        const cartQuantity = calculateCartQuantity();
        document.querySelector('.js-payment-item')
        .innerHTML = `Items (${cartQuantity}):`
        
        };
    cartNumber();



    document.querySelector('.js-place-order')
        .addEventListener('click', async ()=>{
            try {
            const response = await fetch('https://supersimplebackend.dev/orders',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({
                    cart:cart 
                })
            });
            const order = await response.json();
            addOrder(order);
            } catch (error) {
                console.log('unexpected error');
            }

            window.location.href = 'orders.html'
        })
    
};

/*
types of request
GET = get something from the backend
post = create something
put = update something
delete = delete something
*/