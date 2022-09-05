import { Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import "./XOCell.scss";
export const XOCEll = ({ cell, onClick }) => {
    const winnerCells = useSelector((state) => state.xo.winnerCells);
    console.log({ x: cell.x, y: cell.y });
    console.log(winnerCells);
    const classNames =
        winnerCells.findIndex((e) => e.x === cell.x && e.y === cell.y) !== -1
            ? "winner-cell"
            : "";
    console.log(classNames);
    return (
        <Grid item onClick={onClick}>
            <Paper
                sx={{
                    height: { xs: "100px", md: "200px" },
                    width: { xs: "100px", md: "200px" },
                }}
                className={classNames}
            >
                <Typography
                    align="center"
                    sx={{ fontSize: { xs: 60, md: 120 } }}
                >
                    {cell.value}
                </Typography>
            </Paper>
        </Grid>
    );
};
