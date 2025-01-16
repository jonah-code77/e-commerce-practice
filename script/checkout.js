import { loadProducts,loadProductFetch } from "../data/products.js";
import { renderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";


//promise.all allows multi promises class

Promise.all([
    loadProductFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
           
          resolve();
       });
    })

]).then(()=>{
    renderSummary();
    renderPaymentSummary();
})

/*
Promise.all([
    new Promise((resolve)=>{
        loadProductFetch(()=>{  
            
         resolve(); //lets us know when to go to the next step
        });
        
    }),
    new Promise((resolve)=>{
        loadCart(()=>{
           
          resolve();
       });
    })

]).then(()=>{
    renderSummary();
    renderPaymentSummary();
})

new Promise((resolve)=>{
    loadProducts(()=>{  
     resolve(); //lets us know when to go to the next step
    });
    
}).then(()=>{
    return new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
     });
  });
    
}).then(()=>{
    renderSummary();
    renderPaymentSummary();
});

loadProducts(()=>{
    loadCart(()=>{
        renderSummary();
        renderPaymentSummary();
    })
});
*/

