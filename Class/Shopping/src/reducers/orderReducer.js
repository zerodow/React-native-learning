import { ADD_ORDER, DELETE_ORDER } from '../actions/type'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_ORDER:
            //check da ton tai chua
            const trung = state.filter(order => order.name === action.payload.name)

            if (trung.length === 0) {
                return [...state, {
                    name: action.payload.name,
                    price: action.payload.price,
                    amount: 1
                }]
            } else {
                return state.map(item => item.name === action.payload.name
                    ? {
                        name: item.name,
                        price: item.price,
                        amount: item.amount + 1
                    }
                    : item
                )
            }

        case DELETE_ORDER:
            return state.filter(item => item.name !== action.payload.name)

        default: return state
    }

}