class Carts {
  cartItems;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.loadFromStorage();
  }

  loadFromStorage() {
  this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

  if (!this.cartItems) {
  this.cartItems = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
    }
];
}


};

saveToLocalstorage() {
  localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
};

addToCart(productId) {
    let matchingItem;

  this.cartItems.forEach((cartItem)=> {

    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    }
    });
    if(matchingItem) {
      matchingItem.quantity += 1 ;
    } else {
      this.cartItems.push({
    productId: productId,
    quantity:1,
    deliveryOptionId: '1'
  })
    } ;
   this.saveToLocalstorage();   

};

removeFromCart(productId) {
  const newCart = [];

  this.cartItems.forEach((cartItem) => {
   if(cartItem.productId !== productId) {
    newCart.push(cartItem);
   }
  });
  this.cartItems = newCart ;
  this.saveToLocalstorage();
};

updateDeliveryOption(productId, deliveryOptionId)  {
  let matchingItem;

    this.cartItems.forEach((cartItem)=> {

      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }
      });

  matchingItem.deliveryOptionId = deliveryOptionId;
  this.saveToLocalstorage();    

};


}

const carts = new Carts('carts-oop');
const businessCart = new Carts('business-cart');


console.log(carts);
console.log(businessCart);


