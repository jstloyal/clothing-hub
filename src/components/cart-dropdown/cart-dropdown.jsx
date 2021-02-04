import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/custom-button';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-dropdown.styles.scss';

function CartDropdown() {
  const cartItems = useSelector(state => selectCartItems(state));

  const dispatch = useDispatch();

  const history = useHistory();

  return(
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
