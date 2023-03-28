import React, { useContext } from 'react';
import CartContext from '../../Store/cart-contex';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    // const noOfCartItem = cartCtx.item.reduce((currentNumber, item)=>{
    //     return (currentNumber + item.amount)
    // },0)
    
    // console.log(cartCtx.item.length)
    
  return (
    
    <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}>
    <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartCtx.item.length}</span>
    </button>
    
  )
}

export default HeaderCartButton