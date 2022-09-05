import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo, changeFilter } from "../../../store/reducers/todoReducer";

export const ToDoForm = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const clickHandler = () => {
        if (inputRef.current.value.trim() !== "") {
            dispatch(addTodo(inputRef.current.value));
            dispatch(changeFilter(""));
            inputRef.current.value = "";
        }
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
            }}
        >
            <TextField
                inputRef={inputRef}
                fullWidth
                onChange={() => dispatch(changeFilter(inputRef.current.value))}
            ></TextField>
            <Button
                variant="contained"
                sx={{ height: "56px", marginLeft: 2 }}
                onClick={clickHandler}
            >
                Add
            </Button>
        </Box>
    );
};
