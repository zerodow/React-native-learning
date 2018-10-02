import { ADD_DATA } from "../container/const";

const initialState = {
    data: [],
    searchText: ''
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}