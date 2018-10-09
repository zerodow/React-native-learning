import { ADD_DATA, ADD_HOT_MOVIE } from "../container/const";

const initialState = {
    data: [],
    searchText: '',
    hotMovies: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: action.payload
            }

        case ADD_HOT_MOVIE:
            return {
                ...state,
                hotMovies: action.payload
            }
            
        default:
            return state
    }
}