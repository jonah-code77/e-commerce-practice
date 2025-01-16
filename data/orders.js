
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

//to add order to the array
export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
};

//save to local storage
function saveToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
};