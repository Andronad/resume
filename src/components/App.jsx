import { createTheme, Paper, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useMode } from "./../hooks/index";
import { AboutMe } from "./AboutMe/AboutMe";
import "./App.scss";
import Navbar from "./NavBar";
import ToDoApp from "./ToDoApp/ToDoApp";
import { TicTacToeApp } from "./TicTacToeApp/TicTacToeApp";

const App = () => {
    const mode = useMode();

    const theme = createTheme({
        typography: {
            fontFamily: [
                "Hanalei Fill",
                "Roboto",
                "Arial",
                "sans-serif",
                '"Segoe UI Symbol"',
            ].join(","),
        },
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ minHeight: "100vh" }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AboutMe />}></Route>
                    <Route path="/todo" element={<ToDoApp />}></Route>
                    <Route path="/tictactoe" element={<TicTacToeApp />}></Route>
                </Routes>
            </Paper>
        </ThemeProvider>
    );
};

export default App;
