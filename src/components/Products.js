import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  loadProducts,
  toggleItemInCard,
  toggleItemInWishlist,
} from '../redux/action-creators';
import {Product} from './Product';

export const Products = () => {
  const {products, isLoading} = useSelector (store => store.products);
  const {productsInCart} = useSelector (store => store.cart);
  const {productsInWishlist} = useSelector (store => store.wishlist);

  const dispatch = useDispatch ();

  useEffect (() => {
    dispatch (loadProducts ());
  }, []);

  return (
    <div className="cartField">

      {isLoading && <h2 style={{color: 'red'}}>LOADING</h2>}

      {!isLoading &&
        !!products.length &&
        products.map (el => (
          <Product
            product={el}
            key={el.id}
            onCartClick={() => dispatch (toggleItemInCard (el.id))}
            onWishlistClick={() => dispatch (toggleItemInWishlist (el.id))}
            isInCart={productsInCart.includes (el.id)}
            isInWishlist={productsInWishlist.includes (el.id)}
          />
        ))}
    </div>
  );
};
