import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: "1",
            title: "Get a new job",
            done: false,
        },
        {
            id: "2",
            title: "Change oil in the car",
            done: true,
        },
        {
            id: "3",
            title: "Check todos in my phone",
            done: false,
        },
    ],
    filter: "",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload;
        },
        addTodo(state, action) {
            const newTodo = {
                id: Date.now().toString(),
                title: action.payload,
                done: false,
            };
            state.todos.push(newTodo);
        },
        removeTodo(state, action) {
            const foundIndex = state.todos.findIndex(
                (e) => e.id === action.payload
            );
            state.todos.splice(foundIndex, 1);
        },
        toggleTodoDone(state, action) {
            const foundIndex = state.todos.findIndex(
                (e) => e.id === action.payload
            );
            state.todos[foundIndex].done = !state.todos[foundIndex].done;
        },
    },
});

export const { changeFilter, addTodo, removeTodo, toggleTodoDone } =
    todoSlice.actions;
export default todoSlice.reducer;
