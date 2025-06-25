import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksByDate: {}
}


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { date, text } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({ id: Date.now(), text })
        },

        editTask: (state, action) => {
            const { date, id, text } = action.payload;
            const tasks = state.tasksByDate[date];

            if (tasks) {
                const task = tasks.find(t => t.id === id);
                if (task) task.text = text
            }
        },

        deleteTask: (state, action) => {
            const { date, id } = action.payload;
            if (state.tasksByDate[date]) {
                state.tasksByDate[date] = state.tasksByDate[date].filter(t => t.id !== id)
            }
        }
    }
})

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});

export default store;