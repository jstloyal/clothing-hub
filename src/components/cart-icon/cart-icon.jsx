import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = () =>  {
  const itemCount = useSelector(state => selectCartItemsCount(state));

  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartHidden());

  return(
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon;
