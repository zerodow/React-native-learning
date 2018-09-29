import { CHANGE_COLOR } from '../container/const'

export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: color
})
