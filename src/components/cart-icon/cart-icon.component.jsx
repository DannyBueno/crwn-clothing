import React from 'react';
import { connect } from 'react-redux';
 
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styless.scss';

//Cart-Icon component

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
    </div>
);

//function that triggers dispatch of toggleCartHidden
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
// adds our accumulated quantity 
const mapSateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapSateToProps, 
  mapDispatchToProps
  )(CartIcon);