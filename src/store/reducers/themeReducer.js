import { CHANGE_THEME_MODE } from "./../actions/index";

const initialState = {
    mode: "light",
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME_MODE:
            return {
                mode: state.mode === "light" ? "dark" : "light",
            };
        default:
            return state;
    }
};
