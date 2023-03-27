import React from 'react'
import  classes from './Header.module.css'
import mealsImg from '../../Asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
  return (
    <>
    <header className={classes.header} >
    <h1>SAGA FOODS</h1>
   <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>

<img  src={mealsImg} alt='Meals Img'/>
    </div>

    </>
  )
}

export default Header