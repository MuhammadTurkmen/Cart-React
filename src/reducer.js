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

        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem
            const itemTotal = price * amount

            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
        }, {
            total: 0, 
            amount: 0
        })

        total = parseFloat(total.toFixed(2))
        
        return {...state, total, amount}
    }

    if(action.type === 'LOADING') {
        return {...state, loading: true}
    }
    
    if(action.type === 'DISPLAY_ITEMS') {
        return {...state, cart:action.payload, loading:false}
    }

    if(action.type === 'TOGGLE_AMOUNT') {
        let tempCart = []
        return {...state, cart: tempCart}
    }

    return state
}

export default reducer 