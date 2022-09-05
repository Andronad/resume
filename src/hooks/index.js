import { useSelector } from "react-redux";
export const useMode = () => {
    return useSelector((state) => state.theme.mode);
};

export const useTodos = () => {
    return useSelector((state) => state.todo.todos);
};

export const useFilter = () => {
    return useSelector((state) => state.todo.filter);
};
