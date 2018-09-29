import { ADD_TASK } from '../action/type';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            //1. check xem ngày đó có task chưa
            //2. add task
            //3. sort
            const taskOfDay = state.filter(item => item.id === action.payload.id)
            if (taskOfDay.length === 0) {
                //lay tat ca object trong list cu
                //add them obj moi
                //sort
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            action.payload.task
                        ]
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            } else {
                //1. lay tat ca obj trong list cu tru ngay can add ra
                //2. add them vao ngay do
                //3. sort
                return [
                    ...(state.filter(item => item.id === action.payload.id)),
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            ...(taskOfDay[0].data),
                            action.payload.task
                        ].sort((task1, task2) => task1.id - task2.id)
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            }

        default:
            return state
    }
}