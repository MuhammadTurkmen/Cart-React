const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    
    if(action.type === 'REMOVE') {
        return {...state, cart: state.cart.filter(() => )}
    }

    return state
}

export default reducer 