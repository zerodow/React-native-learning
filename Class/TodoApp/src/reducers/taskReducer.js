import { ADD_TASK, TOOGLE_TASK, DEL_TASK } from '../action/type';

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
                    ...(state.filter(item => item.id !== action.payload.id)),
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

        case TOOGLE_TASK:
            return state.map(item =>
                (item.id === action.payload.dayId)
                    ? {
                        id: item.id,
                        date: item.date,
                        data: item.data.map(task =>
                            (task.id === action.payload.taskId)
                                ? {
                                    id: task.id,
                                    category: task.category,
                                    content: task.content,
                                    time: task.time,
                                    isDone: !task.isDone
                                }
                                : task
                        )
                    }
                    : item
            )

        case DEL_TASK:
            const taskDel = state.filter(item => item.id === action.payload.dayId)
            return [
                ...(state.filter(item => item.id !== action.payload.dayId)),//giữ lại các item có id khác
                // làm việc với item có id giống
                {
                    id: taskDel[0].id,
                    date: taskDel[0].date,
                    data: taskDel[0].data.filter(task => task.id !== action.payload.taskId)
                }
            ].sort((day1, day2) => day1.id - day2.id)

        default:
            return state
    }
}