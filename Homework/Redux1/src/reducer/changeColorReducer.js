import { CHANGE_COLOR } from '../container/const'

const color = {
    value1: 50,
    value2: 50,
    value3: 50
}
export default function (state = color, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return action.payload
        default:
            return state
    }
}