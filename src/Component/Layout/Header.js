import React from 'react'
import  classes from './Header.module.css'
import meals from '../../Img/meals.jpg'
import HeaderCartButton from './HeaderCartButton'


const Header = () => {
  return (
    <>
    <div className={classes.header} >
    <h1>SAGA FOODS</h1>
   <HeaderCartButton/>
    </div>
<img className={classes['main-image']} src={meals}/>

    </>
  )
}

export default Header