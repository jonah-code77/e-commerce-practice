export const cart = [];

export function addToCart(productId){
  let matchingItem;

  //Loop Through The Cart To see if the Id matches any item in the cart first
  cart.forEach((carItem)=>{
    if(productId === carItem.productId){
      matchingItem = carItem;
    }
  })

  //using selector to add to the quantity
  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value)

  //if its a matching item then the quantity, do not increase the cart quantity instead increase the product quantity
  if (matchingItem){
    matchingItem.quantity = quantity;
  }else{
    //if its not a matching item then the item is added to the cart
    cart.push({
      productId,
      quantity

    })
  }
}