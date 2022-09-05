import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { move } from "../../../store/reducers/xoReducer";
import { XOCEll } from "../XOCell/XOCell";

export const XOGrid = () => {
    const field = useSelector((state) => state.xo.field);
    const dispatch = useDispatch();
    return (
        <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ marginBottom: "20px" }}
        >
            {field.map((row, index1) => (
                <Grid
                    container
                    item
                    justifyContent="center"
                    spacing={2}
                    key={index1 * 100 + 10}
                >
                    {row.map((value, index2) => (
                        <XOCEll
                            cell={{value: value, x:index1, y:index2}}
                            key={index1 * 3 + index2}
                            onClick={() =>
                                dispatch(move({ x: index1, y: index2 }))
                            }
                        />
                    ))}
                </Grid>
            ))}
        </Grid>
    );
};
