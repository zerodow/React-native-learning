import { CHANGE_ARRAY_RESULT, CHANGE_ARRAY_START, CHANGE_TYPE } from "../const";

export const touchStartArray = (name) => ({
    type: CHANGE_ARRAY_START,
    payload: name,
})

export const touchResultArray = (name) => ({
    type: CHANGE_ARRAY_RESULT,
    payload: name,
})

export const changeType = (name) => ({
    type: CHANGE_TYPE,
    payload: name
})