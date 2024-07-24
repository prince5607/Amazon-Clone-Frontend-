export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6' ,
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }];
}
 

function CartStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function AddToCart(productId) {

    let itematches;
      cart.forEach((item) => {
        if(productId === item.productId){
          itematches = item;
        }

      });
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      const quantity = Number(quantitySelector.value);


      if(itematches){
        itematches.quantity += quantity;
      }
      else {
        cart.push({
          productId : productId,
          quantity : quantity,
        });
      }
    CartStorage();
}

export function removeCartItem(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
           newCart.push(cartItem);
        }

    })
    cart = newCart;
    CartStorage();
}

export function updateCartCountQuantity(){
  let carttotalQuantity =0;
  
  cart.forEach((item) => {
    carttotalQuantity += item.quantity;
  })
  return carttotalQuantity;
}