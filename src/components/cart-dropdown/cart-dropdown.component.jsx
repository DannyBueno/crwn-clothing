import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

//Cart-dropdown component
const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cat-items' />
        <CustomButton>GO TO CHECKOUT </CustomButton>

    </div>
)
export default CartDropdown;