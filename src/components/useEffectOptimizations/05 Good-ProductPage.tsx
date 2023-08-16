import React, {  } from "react";

interface ComponentProps {
  product: { id: number; name: string; isInCart: boolean }
  addToCart(product: { id: number; name: string; isInCart: boolean }): void;
}

const GoodProductPage:React.FC<ComponentProps> = ({ product, addToCart }) => {

  console.time('✅')
  // ✅ Good: Event-specific logic is called from event handlers
  function buyProduct() {
    addToCart({...product, isInCart: true});
  }

  function handleBuyClick() {
    buyProduct();
    // any buy specific function 
  }
  
  function handleCheckoutClick() {
    buyProduct();
    // any checkout specific function 
  }
  console.timeEnd('✅')
  
  return (
    <div>
      <button 
        onClick={() => handleBuyClick()}
      >Buy</button>
      <button 
        onClick={handleCheckoutClick}
      >Checkout</button>
      <br />
      { product.isInCart && <div>Success Purchase</div>}
    </div>
  )
}

export { GoodProductPage };
