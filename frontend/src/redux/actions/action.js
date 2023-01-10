export const ADD = (item) => {
    return{
        type : 'ADD_TO_CART',
        payload: item
    }
}

export const REMOVE = (id) => {
    return{
        type : 'REMOVE_FROM_CART',
        payload: id
    }
}

export const DECREASE = (item) => {
    return{
        type : 'DECREASE_CART',
        payload: item
    }
}