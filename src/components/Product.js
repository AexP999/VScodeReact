import React, {useEffect} from 'react';

export const Product = ({
  product,
  onCartClick,
  onWishlistClick,
  isInCart,
  isInWishlist,
}) => {
  return (
    <div className="product-item" key={product.id}>
      <h3>{product.title}</h3>
      <h4>{product.price} USD</h4>
      <p>{product.description}</p>

      <button
        style={{background: isInWishlist ? 'red' : ''}}
        onClick={onWishlistClick}
      >
        {isInWishlist ? 'remove from wishlist' : 'add to wishlist'}
      </button>
      <button style={{background: isInCart ? 'red' : ''}} onClick={onCartClick}>
        {isInCart ? 'remove from card' : 'add to cart'}
      </button>
      <img src={product.image} alt="" />
    </div>
  );
};
