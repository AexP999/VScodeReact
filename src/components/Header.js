import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

export const Header = () => {
  const {products} = useSelector (store => store.products);
  const {productsInCart} = useSelector (store => store.cart);
  const {productsInWishlist} = useSelector (store => store.wishlist);

  const calculatedCartSum = useMemo (
    () => {
      return products
        .filter (el => productsInCart.includes (el.id))
        .reduce ((acc, el) => (acc += el.price), 0);
    },
    [products, productsInCart]
  );
  const calculatedWishlistSum = useMemo (
    () => {
      return products
        .filter (el => productsInWishlist.includes (el.id))
        .reduce ((acc, el) => (acc += el.price), 0);
    },
    [products, productsInWishlist]
  );

  return (
    <header>
      <h2>HEADER</h2>
      <div className="counters">
        <span>
          wishlist:
          {' '}
          {productsInWishlist.length}
          {' '}
          ($
          {' '}
          {calculatedWishlistSum.toFixed (2)}
          )
        </span>
        <span>
          cart: {productsInCart.length} ($ {calculatedCartSum.toFixed (2)})
        </span>
      </div>
    </header>
  );
};
