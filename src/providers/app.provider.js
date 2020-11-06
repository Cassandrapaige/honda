import React, { createContext, useReducer, useContext } from 'react'
import {STOCK} from '../constants/data'

import {addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart, 
        addToLocalStorage,
        calculateQuantity,
        toggleHidden} 
    from './app.utils'

const AppContext = createContext();

export const useAppState = () => {
    return useContext(AppContext);
}

const INITIAL_STATE = {
    stock: STOCK,
    filteredList: STOCK,
    cartItems: [],
    quantity: 0,
    activeFilterLink: 0,
    hidden: true,
    price: 0
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
            addToLocalStorage(items)
            return {
                ...state,
                cartItems: items,
                quantity: calculateQuantity(items, 'quantity'),
            }
        }
        case "REMOVE_FROM_CART" : {
            let items = removeItemFromCart(state.cartItems, action.payload);
            addToLocalStorage(items)
            return {
                ...state,
                cartItems: items,
                quantity: calculateQuantity(items, 'quantity')
            }
        }
        case "CLEAR_FROM_CART" : {
            let items = clearItemFromCart(state.cartItems, action.payload);
            addToLocalStorage(items)
            return {
                ...state,
                cartItems: items,
                quantity: calculateQuantity(items, 'quantity')
            }
        }
        case "FILTER_STOCK_BY_CATEGORY" : {
            return {
                ...state,
                filteredList: state.stock.filter(item => 
                    item.category.includes(action.category)),
                activeFilterLink: action.active
            }
        }
        case "GET_LOCAL_STATE": {
            return {
                ...state,
                cartItems: action.payload,
                quantity: calculateQuantity(action.payload, 'quantity')
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