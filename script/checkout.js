import { loadProducts,loadProductFetch } from "../data/products.js";
import { renderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";

//async makes a function return a promise
//await can only be use inside asyn function
async function loadPage(){
    try{
        //throw 'error1'
        await loadProductFetch();
        const value = await new Promise((resolve,reject)=>{
            //throw 'error22'
             loadCart(()=>{    
                //reject('error3')  
               resolve();
            });
         })
    }catch(error){
        console.log('unexpected error');
    }
    renderSummary();
    renderPaymentSummary();

}

loadPage()
/*
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
//promise.all allows multi promises class
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

