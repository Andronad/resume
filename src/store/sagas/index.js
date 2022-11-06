import { put, takeEvery } from "redux-saga/effects";
import { loadTodos, removeTodo, toggleTodoDone } from "../reducers/todoReducer";
import {
    FETCH_TODOS_REQUESTED,
    TOGGLE_TODO_REQUESTED,
    REMOVE_TODO_REQUESTED,
    ADD_TODO_REQUESTED,
} from "./sagaActions";
import { HOST } from "./../../constants/index";

function* fetchTodosRequest() {
    try {
        const response = yield fetch(`${HOST}/todos`);
        const todos = yield response.json();
        yield put(loadTodos(todos));
    } catch (e) {
        console.log(e);
    }
}

function* addTodoRequest(action) {
    try {
        const data = {
            title: action.payload,
            done: false,
        };
        const response = yield fetch(`${HOST}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            yield put(FETCH_TODOS_REQUESTED);
        }
    } catch (e) {
        console.log(e);
    }
}

function* toggleTodoRequest(action) {
    try {
        const data = {
            id: action.payload,
        };
        const response = yield fetch(`${HOST}/todos`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            yield put(toggleTodoDone(action.payload));
        }
    } catch (e) {
        console.log(e);
    }
}

function* removeTodoRequest(action) {
    try {
        const data = {
            id: action.payload,
        };
        const response = yield fetch(`${HOST}/todos`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            yield put(removeTodo(action.payload));
        }
    } catch (e) {
        console.log(e);
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_TODOS_REQUESTED.type, fetchTodosRequest);
    yield takeEvery(ADD_TODO_REQUESTED().type, addTodoRequest);
    yield takeEvery(TOGGLE_TODO_REQUESTED().type, toggleTodoRequest);
    yield takeEvery(REMOVE_TODO_REQUESTED().type, removeTodoRequest);
}

export default rootSaga;
