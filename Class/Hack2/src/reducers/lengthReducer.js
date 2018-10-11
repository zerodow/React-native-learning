import { dataLength, dataWeight, type, CHANGE_ARRAY_START, CHANGE_ARRAY_RESULT, WEIGHT_TYPE, LENGTH_TYPE, CHANGE_TYPE } from '../const'

const initialState = {
    //mảng vào
    startArray: dataLength,

    //mảng kết quả
    resultArray: dataLength,
    //type hiện tại : LENGTH_TYPE hoặc WEIGHT_TYPE
    type: LENGTH_TYPE,

    //list các type
    listType: type
}

export default lengthReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ARRAY_START: {
            return {
                ...state,
                startArray: state.startArray.map(item => {
                    if (item.name !== action.payload) {
                        return {
                            ...item,
                            isChoosen: false
                        }
                    } else {
                        return {
                            ...item,
                            isChoosen: true
                        }
                    }
                })
            }
        }

        case CHANGE_ARRAY_RESULT: {
            return {
                ...state,
                resultArray: state.resultArray.map(item => {
                    if (item.name !== action.payload) {
                        return {
                            ...item,
                            isChoosen: false
                        }
                    } else {
                        return {
                            ...item,
                            isChoosen: true
                        }
                    }
                })
            }
        }

        //thay đổi type 
        case CHANGE_TYPE: {
            return {
                type: action.payload,
                startArray: action.payload == LENGTH_TYPE ? dataLength : dataWeight,
                resultArray: action.payload == LENGTH_TYPE ? dataLength : dataWeight,
                listType: state.listType.map(item => {
                    if (item.name === action.payload) {
                        return {
                            ...item,
                            isChoosen: true
                        }
                    } else {
                        return {
                            ...item,
                            isChoosen: false
                        }
                    }
                }),
            }
        }
        default:
            return state
    }
}