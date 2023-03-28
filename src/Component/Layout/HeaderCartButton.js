import React, { useContext } from 'react';
import CartContext from '../../Store/cart-contex';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx)
    const noOfCartItem = cartCtx.item.reduce((currentNumber, item)=>{
        return (currentNumber + item.amount)
    },0)
    
    
  return (
    
    <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}>
    <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfCartItem}</span>
    </button>
    
  )
}

export default HeaderCartButton