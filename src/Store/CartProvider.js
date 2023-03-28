import { useReducer } from "react";
import CartContext from "./cart-contex";

const defaultState ={
    item:[],
    totalAmount:0,
}

const cartReducer =(state , action)=>{
    if(action.type=='ADD'){
      const updateCartItem =  state.item.concat(action.item)
      const updateTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount
      return {
        item : updateCartItem,
        totalAmount : updateTotalAmount
      }
    }else if(action.tyep=='REMOVE'){

    }else{

        return defaultState
    }

}

const CartProvider =(props)=>{
    const [state , dispatch] = useReducer(cartReducer , defaultState)
    const cartContex ={
        item:state.item,
        totalAmount : state.totalAmount,
        addItem:((item)=>{
            dispatch({type:'ADD',item : item})
        }),
        removeItem:((id)=>{
            dispatch({type:'REMOVE' , id: id})
        }),

    }
return <CartContext.Provider value={cartContex}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;