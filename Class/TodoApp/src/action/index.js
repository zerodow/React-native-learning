import { ADD_TASK, PICK_CATEGORY } from './type';

export const pickCategory = (category) => ({
    type: PICK_CATEGORY,
    payload: category
})

export const addTask = (data) => ({
    type: ADD_TASK,
    //data:{ id, date, task}
    payload: data
})