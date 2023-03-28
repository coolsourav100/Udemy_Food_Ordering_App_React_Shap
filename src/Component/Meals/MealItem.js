import React, { useContext } from 'react';
import CartContext from '../../Store/cart-contex';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartCTX = useContext(CartContext)
  let price = `₹ ${props.price.toFixed(2)}`
  const addToCartHandler = (inputItem)=>{
      cartCTX.addItem({
        id:props.id,
        name:props.name,
        amount:inputItem,
        price:props.price
      })

    }
  return (
    <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
<MealItemForm id={props.id} addToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem