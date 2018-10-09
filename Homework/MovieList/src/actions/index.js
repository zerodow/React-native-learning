import { ADD_DATA,ADD_HOT_MOVIE } from "../container/const";

export const addData = (data) => ({
    type: ADD_DATA,
    payload: data
})

export const addHotMovie = (data) => ({
    type: ADD_HOT_MOVIE,
    payload: data
})