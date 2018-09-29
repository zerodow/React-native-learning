import { ADD_TASK, PICK_CATEGORY } from '../action/type';

export default function (state = 'To do', action) {
    switch (action.type) {
        case PICK_CATEGORY:
            return action.payload
        default:
            return state
    }
}