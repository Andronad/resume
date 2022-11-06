import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TowLabelSwitch } from "../common/TwoLabelSwitch/TwoLabelSwitch";
import VerticalDivider from "../common/VerticalDivider";
import { changeThemeMode } from "./../../store/actionCreators/index";
import { StyledLink } from "./../common/StyledLink/StyledLink";
import "./Navbar.scss";

const pages = [
    { title: "ANDREI MINZER CV", route: "/" },
    { title: "TODO", route: "/todo" },
    { title: "XO", route: "/tictactoe" },
];

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (pageRoute) => {
        setAnchorElNav(null);
        navigate(pageRoute);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem
                                key={page.title}
                                onClick={() => handleCloseNavMenu(page.route)}
                            >
                                <Typography textAlign="center">
                                    {page.title}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box
                    sx={{
                        display: { md: "flex", xs: "none" },
                        flexDirection: "row",
                        flexGrow: 1,
                    }}
                >
                    {pages.map((page) => (
                        <Fragment key={page.title}>
                            <StyledLink to={page.route}>
                                <Typography variant="h4">
                                    {page.title}
                                </Typography>
                            </StyledLink>
                            <VerticalDivider />
                        </Fragment>
                    ))}
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
