import React from 'react';
import classes from './MealItemForm.module.css'

const MealItemForm = () => {
  return (
    <form className={classes.form}>
        <p >Amount<input type='number'/></p>
<button className={classes.button}>+ADD</button>
    </form>
  )
}

export default MealItemForm