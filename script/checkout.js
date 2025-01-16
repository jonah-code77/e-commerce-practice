import { loadProducts } from "../data/products.js";
import { renderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";


loadProducts(()=>{
    renderSummary();
    renderPaymentSummary();
})

