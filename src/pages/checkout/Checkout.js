import React from 'react';
import { useSelector } from 'react-redux';
import './Checkout.styles.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';

function CheckoutPage() {
  const cartItems = useSelector(state => selectCartItems(state));

  const total = useSelector(state => selectCartTotal(state));

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following the test credit card for payment
        <br />
        4242 4242 4242 4242 - Exp: 09/21 - CVV: 182
      </div>
      <StripeCheckoutButton price={total} />
    </div>
    
  );
};

export default CheckoutPage;
