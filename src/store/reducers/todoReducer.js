import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
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
                (e) => e._id === action.payload
            );
            state.todos.splice(foundIndex, 1);
        },
        toggleTodoDone(state, action) {
            const foundIndex = state.todos.findIndex(
                (e) => e._id === action.payload
            );
            state.todos[foundIndex].done = !state.todos[foundIndex].done;
        },
        loadTodos(state, action) {
            state.todos = action.payload;
        },
    },
});

export const { changeFilter, addTodo, removeTodo, toggleTodoDone, loadTodos } =
    todoSlice.actions;
export default todoSlice.reducer;
