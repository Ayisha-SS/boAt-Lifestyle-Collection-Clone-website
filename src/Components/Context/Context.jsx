import React, { useReducer,createContext  } from 'react'
import reducer, { initialState } from './Reducers';
// import data from "../Home/Home.json"
import storeReducer from './Reducers';

export const Cart = createContext();


export const Context = ({children}) => {
  const [state,dispatch] = useReducer(storeReducer,initialState);

  const addToCart = (item) =>{
    // console.log(item,"cart item");
    const updateCart = [...state.products,item];
    // updateCart.push(item);

    updatePrice(updateCart)

    dispatch({
        type:"add",
        payload:updateCart
    })
  }

  const removeFromCart = (item) =>{
    
    const updateCart = state.products.filter((currentProduct) => currentProduct.type !== item.type);
    updatePrice(updateCart)

    dispatch({
        type:"remove",
        payload:updateCart
    })
    
  }

  const updatePrice = (products) =>{
    let total = 0;
    products.forEach(item => {
        total += item.price
    });

    // const total = products.reduce((sum,item) => sum + item.price,0)
    dispatch({
        type:"update price",
        payload:total
    })
  }

  const increment = (type) =>{
    return dispatch({
      type:"Increment",
      payload:type,
    });
  }

  const value = {
    total:state.total,
    products:state.products,
    addToCart,
    removeFromCart,
    increment, 
  }

  return <Cart.Provider value={value}>
    {children}
  </Cart.Provider>
    
}

