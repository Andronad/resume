import DeleteIcon from "@mui/icons-material/Delete";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    removeTodo,
    toggleTodoDone,
} from "../../../store/reducers/todoReducer";

export const ToDoItem = ({ item }) => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();

    const todoClasses = item.done ? { textDecoration: "line-through" } : {};

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const deleteItem = () => {
        dispatch(removeTodo(item.id));
    };

    const deleteHandler = () => {
        if (item.done) {
            deleteItem();
        } else {
            handleOpenModal();
        }
    };
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 2,
                    marginBottom: 2,
                    cursor: "pointer",
                    width: "280px",
                }}
                onClick={() => dispatch(toggleTodoDone(item.id))}
            >
                <Typography sx={todoClasses}>{item.title}</Typography>
            </Paper>
            <Button
                sx={{ height: "56px" }}
                color="error"
                onClick={deleteHandler}
            >
                <DeleteIcon />
            </Button>
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This item is not done yet. Please do it or delete if you
                        are sure that this todo is not needed more
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={deleteItem} color="error">
                        Delete
                    </Button>
                    <Button onClick={handleCloseModal} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
