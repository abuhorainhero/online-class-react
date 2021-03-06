import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const priceTotal = cart.reduce( (sum, item) => sum + item.price, 0);
    return (
        <div className='cart-area'>
            <h5><strong>Order Summary</strong></h5>
            <p>Total Order Course : {cart.length} </p>
            <p>Total Order Price : {priceTotal}<b>৳</b></p>
        </div>
    );
};

export default Cart;