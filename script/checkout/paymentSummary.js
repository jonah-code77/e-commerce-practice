import {cart,calculateCartQuantity} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryoptions.js';
import { formatCurrency } from '../utills/money.js';

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

            <button class="place-order-button button-primary">
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
}