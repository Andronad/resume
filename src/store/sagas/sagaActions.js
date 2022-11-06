export const FETCH_TODOS_REQUESTED = {
    type: "FETCH_TODOS_REQUESTED",
};

export const TOGGLE_TODO_REQUESTED = (id) => {
    return { type: "TOGGLE_TODO_REQUESTED", payload: id };
};

export const REMOVE_TODO_REQUESTED = (id) => {
    return { type: "REMOVE_TODO_REQUESTED", payload: id };
};

export const ADD_TODO_REQUESTED = (todoTitle) => {
    return { type: "ADD_TODO_REQUESTED", payload: todoTitle };
};
