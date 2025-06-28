import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        { id: 1, title: "Read book", completed: false, categoryId: 1 },
        { id: 2, title: "Write code", completed: true, categoryId: 2 }
    ],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },

        editTask: (state, action) => {
            const { id, title } = action.payload;
            const task = state.tasks.find(t => t.id === id);
            if (task) task.title = title;
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
        },

        toggleComplete: (state, action) => {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) task.completed = !task.completed;
        }
    }
});

export const { addTask, editTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;

export const selectTasks = state => state.tasks.tasks;

export const selectTasksByCategory = categoryId =>
    createSelector([selectTasks], tasks =>
        tasks.filter(task => task.categoryId === categoryId)
    );

export const selectCompletedTasks = createSelector(
    [selectTasks],
    tasks => tasks.filter(t => t.completed).length
);
