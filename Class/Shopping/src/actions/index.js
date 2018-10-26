import { ADD_ORDER, DELETE_ORDER } from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order
})

export const deleteOrder = (order) => ({
    type: DELETE_ORDER,
    payload: order
})