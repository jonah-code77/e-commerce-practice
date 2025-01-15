class Cart{
    cartItem;
    //# to make loadfromstorage private
    #loadFromStorageKey;

    constructor (loadFromStorageKey){
        this.#loadFromStorageKey = loadFromStorageKey;
        this.#loadFromStorage();
        
    }
    //load from storage
    #loadFromStorage(){
        this.cartItem = JSON.parse(localStorage.getItem(this.#loadFromStorageKey));
        if(!this.cartItem){
            this.cartItem = [{
                productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity:1, 
                deliveryOptionId:'1'
            },{
                productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity:1,
                deliveryOptionId:'2'
            }];
        }
        }
    //saving to storage method
    saveToStorage(){
        localStorage.setItem(this.#loadFromStorageKey,JSON.stringify(this.cartItem));  
    } 
    //add to cart method
    addToCart(productId){
        let matchingItem;
        //Loop Through The Cart To see if the Id matches any item in the cart first
        this.cartItem.forEach((carItem)=>{
          if(productId === carItem.productId){
            matchingItem = carItem;
          }
        });
  
        //if its a matching item then the quantity, do not increase the cart quantity instead increase the product quantity
        if (matchingItem){
          matchingItem.quantity += 1;
        }else{
          //if its not a matching item then the item is added to the cart
          this.cartItem.push({
            productId,
            quantity:undefined,
            deliveryOptionId:'1'
      
          })
        }
        this.saveToStorage();
      }  
     
      //Remove from cart method
      removeFromCart(productId){
        const newCart = [];
        this.cartItem.forEach((carItem)=>{
            if(carItem.productId !== productId){
                newCart.push(carItem);
            }
        });
    
        this.cartItem = newCart;
        this.saveToStorage();
    
    }

     //calculate cart quantity method
     calculateCartQuantity() {
        let cartQuantity = 0;
        this.cartItem.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
        });
        return cartQuantity;
      }
    //update cart quantity method
    updateQuantity(productId,newQuantity){
        let matchingItem;
        this.cartItem.forEach((cartItem)=>{
            if (productId === cartItem.productId) {
                matchingItem = cartItem ;
            }
        }); 
        matchingItem.quantity = newQuantity 
        this.saveToStorage();    
    }  

    //update delivery method
    updateDeliveryOption(productId,deliveryoptionId){
        let matchingItem;
        this.cartItem.forEach((carItem)=>{
            if(productId === carItem.productId){
              matchingItem = carItem;
            }
          });
        matchingItem.deliveryOptionId = deliveryoptionId;
        this.saveToStorage();
      }


}

//instance of the cart
const cart = new Cart('cart-oop');
const businessCart = new Cart('busines');


console.log(cart);
console.log(businessCart)
console.log(cart instanceof Cart)

/*
object oriented programming organize our codes into real life object;
class = object generator

class 'name' {
    j = jj;
        }
    
*/