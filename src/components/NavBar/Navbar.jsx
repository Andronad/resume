import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { TowLabelSwitch } from "../common/TwoLabelSwitch/TwoLabelSwitch";
import VerticalDivider from "../common/VerticalDivider";
import { changeThemeMode } from "./../../store/actionCreators/index";
import { StyledLink } from "./../common/StyledLink/StyledLink";
import "./Navbar.scss";

export const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box
                    sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}
                >
                    <StyledLink to="/">
                        <Typography variant="h4">ANDREI MINZER CV</Typography>
                    </StyledLink>
                    <VerticalDivider />
                    <StyledLink to="/todo">
                        <Typography variant="h4">TODO</Typography>
                    </StyledLink>
                    <VerticalDivider />
                    <StyledLink to="/tictactoe">
                        <Typography variant="h4">X/O</Typography>
                    </StyledLink>
                </Box>
                <TowLabelSwitch
                    label1="Light"
                    label2="Dark"
                    onChange={() => dispatch(changeThemeMode())}
                />
            </Toolbar>
        </AppBar>
    );
};
