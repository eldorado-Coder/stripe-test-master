import React, { ReactElement } from 'react'

import { useShoppingCart, formatCurrencyString, Product } from 'use-shopping-cart'

interface Props {
  
    
}

const  NewProducts = (props:any): ReactElement => {
    const { addItem, removeItem } = useShoppingCart()
    return (
        <section className="products">
        {props.priceData.map((product: Product) => (
          <div key={product.sku} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}{product.recurring? "/month" : ""}
            </p>
            <button
              className="cart-style-background"
              onClick={() => addItem(product)}
            >
              Add to cart
            </button>
            <button
              className="cart-style-background"
              onClick={() => removeItem(product.sku)}
            >
              Remove
            </button>
          </div>
        ))}
      </section>
    )
}

export default NewProducts