const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    
    if(action.type === 'REMOVE') {
        return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)}
    }

    if(action.type === 'INCREASE') {
        let tepmCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
        })
        return {...state, cart: tepmCart}
    }

    if(action.type === 'DECREASE') {
        let tepmCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount - 1}
            }
            return cartItem
        }).filter((cartItem)=> cartItem.amount !== 0 )
        return {...state, cart: tepmCart}
    }


    if(action.type === 'GET_TOTALS') {

        const [total, amount] = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem
            cartTotal.amount += amount
            return cartTotal
        }, {
            total: 0, 
            amount: 0
        })
        
        return {...state, total, amount}
    }


    return state
}

export default reducer 