import React, { useEffect } from "react";

interface ComponentProps {
  product: { id: number; name: string; isInCart: boolean }
  addToCart(product: { id: number; name: string; isInCart: boolean }): void;
}

const BadProductPage:React.FC<ComponentProps> = ({ product, addToCart }) => {

  console.time('❌')
  // ❌ Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if (product.isInCart) {
    }
  }, [product])
  console.timeEnd('❌')

  return (
    <div>
      <button 
        onClick={() => (addToCart({...product, isInCart: true}))}
      >Buy</button>
      <button 
        onClick={() => (addToCart({...product, isInCart: true}))}
      >Checkout</button>
      <br />
      { product.isInCart && <div>Success Purchase</div>}
    </div>
  )
}

export { BadProductPage };
