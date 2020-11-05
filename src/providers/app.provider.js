import React, { createContext, useReducer, useContext } from 'react'
import {STOCK} from '../constants/data'

import {addItemToCart, removeItemFromCart, clearItemFromCart, toggleHidden} from './app.utils'

const AppContext = createContext();

export const useAppState = () => {
    return useContext(AppContext);
}

const INITIAL_STATE = {
    stock: STOCK,
    filteredStockList: STOCK,
    cartItems: [],
    hidden: true,
}

const appStateReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_CART_HIDDEN": {
            return {
                ...state,
                hidden: toggleHidden(state.hidden)
            }
        }
        case "ADD_TO_CART" : {
            let items = addItemToCart(state.cartItems, action.payload);
            localStorage.setItem("cart_items", JSON.stringify(items));
            return {
                ...state,
                cartItems: items
            }
        }
        case "REMOVE_FROM_CART" : {
            let items = removeItemFromCart(state.cartItems, action.payload);
            localStorage.setItem("cart_items", JSON.stringify(items));
            return {
                ...state,
                cartItems: items
            }
        }
        case "CLEAR_FROM_CART" : {
            let items = clearItemFromCart(state.cartItems, action.payload);
            localStorage.setItem("cart_items", JSON.stringify(items));
            return {
                ...state,
                cartItems: items
            }
        }
        case "GET_LOCAL_STATE": {
            return {
                ...state,
                cartItems: action.payload,
            }
        }
        case "FILTER_STOCK_BY_CATEGORY" : {
            return {
                ...state,
                filteredStockList: state.stock.filter(item => 
                    item.category.includes(action.filter))
            }
        }
        default: 
            return state;
    }
}

export const AppStateProvider = ({children}) => {
    let value = useReducer(appStateReducer, INITIAL_STATE);
    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>
}