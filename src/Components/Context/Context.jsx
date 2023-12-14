import React, { useReducer } from 'react'
import { createContext } from 'react'
import reducer, { initialState } from './Reducers';
import EarbudsItem from '../Home/Earbuds/EarbudsItem';

export const Cart = createContext();

export const Context = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState);

  const addToCart = (EarbudsItem) =>{
    const updateCart = state.products;
    updateCart.push(EarbudsItem);

    updatePrice(updateCart)

    dispatch({
        type:"add",
        payload:updateCart
    })
  }

  const removeFromCart = (EarbudsItem) =>{
    const updateCart = state.products.filter((currentProduct) => currentProduct.name !== EarbudsItem.name);

    updatePrice(updateCart)

    dispatch({
        type:"remove",
        payload:updateCart
    })
    
  }

  const updatePrice = (products) =>{
    let total = 0;
    products.forEach(EarbudsItem => {
        total += EarbudsItem.price
    });

    dispatch({
        type:"update price",
        payload:total
    })
  }

  const value = {
    total:state.total,
    products:state.products,
    addToCart,
    removeFromCart,
  }

  return <Cart.Provider value={value}>
    {children}
  </Cart.Provider>
    
}

