import React, { createContext, useReducer, useContext } from 'react';
import {STOCK} from '../constants/data';

import {addItemToCart, 
        removeItemFromCart, 
        clearItemFromCart, 
        addToLocalStorage,
        calculateTotal,
        toggleHidden
    } from './app.utils'

const AppContext = createContext();

const INITIAL_STATE = {
    inventory: STOCK,
    cartItems: [],
    quantity: 0,
    active: 0,
    hidden: true,
    currency: "CAD",
    exchangeRate: 1,
    cartSubtotal: 0,
}

const appStateReducer = (state, action) => {
    switch(action.type) {
        case "GET_LOCAL_STATE": {
            return {
                ...state,
                cartItems: action.payload,
                quantity: calculateTotal(action.payload, 'quantity'),
                cartSubtotal: calculateTotal(action.payload, 'cartTotal'),
                currency: action.currency
            }
        }
        case "TOGGLE_CART_HIDDEN": {
            return {
                ...state,
                hidden: toggleHidden(state.hidden),
            }
        }
        case "ADD_TO_CART" : {
            let items = addItemToCart(state.cartItems, action.payload);
            addToLocalStorage("cart_items", items)
            return {
                ...state,
                cartItems: items,
                quantity: calculateTotal(items, 'quantity'),
                cartSubtotal: calculateTotal(items, 'cartTotal'),
            }
        }
        case "REMOVE_FROM_CART" : {
            let items = removeItemFromCart(state.cartItems, action.payload);
            addToLocalStorage("cart_items", items)
            return {
                ...state,
                cartItems: items,
                quantity: calculateTotal(items, 'quantity'),
                cartSubtotal: calculateTotal(items, 'cartTotal'),
            }
        }
        case "CLEAR_FROM_CART" : {
            let items = clearItemFromCart(state.cartItems, action.payload);
            addToLocalStorage("cart_items", items)
            return {
                ...state,
                cartItems: items,
                quantity: calculateTotal(items, 'quantity'),
                cartSubtotal: calculateTotal(items, 'cartTotal'),
            }
        }   
        case "FILTER_STOCK_BY_CATEGORY" : {
            return {
                ...state,
                inventory: STOCK.filter(item => 
                    item.category.includes(action.category)),
                active: action.active
            }
        }
        case "CHANGE_CURRENCY": {
            addToLocalStorage("currency", action.currency)

            return {
                ...state,
                exchangeRate: action.rate,
                currency: action.currency
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

export const useAppState = () => {
    return useContext(AppContext);
}