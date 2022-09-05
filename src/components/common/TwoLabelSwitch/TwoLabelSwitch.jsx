import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";

export const TowLabelSwitch = ({ label1, label2, ...otherProps }) => {
    return (
        <FormGroup sx={{ disply: "flex", flexDirection: "row" }}>
            <Typography sx={{ paddingTop: "7px", paddingRight: "12px" }}>
                {label1}
            </Typography>
            <FormControlLabel
                control={<Switch {...otherProps} />}
                label={label2}
            ></FormControlLabel>
        </FormGroup>
    );
};
