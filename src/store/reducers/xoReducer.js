import { createSlice } from "@reduxjs/toolkit";

const intialField = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const initialState = {
    field: intialField,
    move: "X",
    winnerCells: [],
};

const xoSlice = createSlice({
    name: "xo",
    initialState,
    reducers: {
        move(state, action) {
            if (
                state.field[action.payload.x][action.payload.y] === "" &&
                state.winnerCells.length === 0
            ) {
                state.field[action.payload.x][action.payload.y] = state.move;
                state.move = state.move === "X" ? "O" : "X";
                state.winnerCells = checkWinners(state.field);
            }
        },
        restart(state) {
            state.field = intialField;
            state.move = "X";
            state.winnerCells = [];
        },
    },
});

const checkWinners = (field) => {
    let sumDiagonal = 0;
    let sumDiagonalReverse = 0;
    for (let index1 = 0; index1 < 3; index1++) {
        let sumRow = 0;
        let sumColumn = 0;
        for (let index2 = 0; index2 < 3; index2++) {
            sumRow =
                field[index1][index2] === "X"
                    ? sumRow + 1
                    : field[index1][index2] === "O"
                    ? sumRow - 1
                    : sumRow;
            sumColumn =
                field[index2][index1] === "X"
                    ? sumColumn + 1
                    : field[index2][index1] === "O"
                    ? sumColumn - 1
                    : sumRow;
        }
        if (Math.abs(sumRow) === 3)
            return [
                { x: index1, y: 0 },
                { x: index1, y: 1 },
                { x: index1, y: 2 },
            ];
        if (Math.abs(sumColumn) === 3)
            return [
                { x: 0, y: index1 },
                { x: 1, y: index1 },
                { x: 2, y: index1 },
            ];
        sumDiagonal =
            field[index1][index1] === "X"
                ? sumDiagonal + 1
                : field[index1][index1] === "O"
                ? sumDiagonal - 1
                : sumDiagonal;
        sumDiagonalReverse =
            field[2 - index1][index1] === "X"
                ? sumDiagonalReverse + 1
                : field[2 - index1][index1] === "O"
                ? sumDiagonalReverse - 1
                : sumDiagonalReverse;
    }
    if (Math.abs(sumDiagonal) === 3)
        return [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
        ];
    if (Math.abs(sumDiagonalReverse) === 3)
        return [
            { x: 0, y: 2 },
            { x: 1, y: 1 },
            { x: 2, y: 0 },
        ];
    return [];
};

export const { move, restart } = xoSlice.actions;
export default xoSlice.reducer;
