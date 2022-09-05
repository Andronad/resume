import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { restart } from "../../store/reducers/xoReducer";
import { letterSpacingText } from "../../styles";
import XOGrid from "./XOGrid";

export const TicTacToeApp = () => {
    const dispatch = useDispatch();

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={letterSpacingText}
                >
                    TicTacToe game
                </Typography>
                <XOGrid />
                <Button
                    color="error"
                    variant="contained"
                    onClick={() => dispatch(restart())}
                >
                    <Typography variant="h5">Restart</Typography>
                </Button>
            </Box>
        </Container>
    );
};
