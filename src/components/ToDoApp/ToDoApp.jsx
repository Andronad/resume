import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { letterSpacingText } from "../../styles/index";
import { useFilter, useTodos } from "./../../hooks/index";
import { ToDoForm } from "./ToDoForm/ToDoForm";
import ToDoItem from "./ToDoItem/index";

const ToDoApp = () => {
    const filter = useFilter();
    const todosLength = useTodos().length;
    const showedTodos = useTodos().filter((e) =>
        e.title.toLowerCase().includes(filter.toLowerCase())
    );

    const content =
        todosLength === 0 ? (
            <Typography align="center">{"Nothing to do :("}</Typography>
        ) : showedTodos.length === 0 ? (
            <Typography align="center">{"Can't find anything"}</Typography>
        ) : (
            showedTodos.map((e) => <ToDoItem item={e} key={e.id} />)
        );

    return (
        <Container maxWidth="xs">
            <Box sx={{ padding: "20px" }}>
                <Typography variant="h3" align="center" sx={letterSpacingText}>
                    To Do
                </Typography>
                <ToDoForm />
                {content}
            </Box>
        </Container>
    );
};

export default ToDoApp;
