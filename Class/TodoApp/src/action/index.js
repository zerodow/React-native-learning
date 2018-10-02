import { ADD_TASK, PICK_CATEGORY, TOOGLE_TASK, DEL_TASK } from './type';

export const pickCategory = (category) => ({
    type: PICK_CATEGORY,
    payload: category
})

export const addTask = (data) => ({
    type: ADD_TASK,
    //data:{ id, date, task}
    payload: data
})

export const toogleTask = (data) => ({
    type: TOOGLE_TASK,
    //data: dayId , taskId
    payload: data
})

export const deleleTask = (data) => ({
    type: DEL_TASK,
    //data: dayId , taskId
    payload: data
})