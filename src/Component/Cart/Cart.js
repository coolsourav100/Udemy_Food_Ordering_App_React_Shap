import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems =<ul className={classes['cart-items']}>{[{id:'c1' ,name:'Sushi' ,amount:2 , price: 280}].map((item)=><li>{item.name}</li>)}</ul>
  return (
    <Modal>
        {cartItems}
        <div  className={classes.total}>
            <span>Total</span>
            <span>560</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
        </Modal>
  )
}

export default Cart