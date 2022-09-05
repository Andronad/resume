import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { letterSpacingText } from "./../../styles/index";
import "./AboutMe.scss";
import Experience from "./Experience";
import ProfessionalProfile from "./ProfessionalProfile";
import Skills from "./Skills";

export const AboutMe = () => {
    return (
        <Container>
            <Box className="about-me_content">
                <Box>
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={letterSpacingText}
                    >
                        This is my portfolio
                    </Typography>
                    <Typography align="center" gutterBottom>
                        Hello Dear User! You are visiting my 'visit card'
                        website
                        <br />I will be posting all my recent jobs here so you
                        could enjoy checking them
                    </Typography>
                    <Typography align="center" gutterBottom>
                        Now you can see all my experience and skills in the
                        short CV below:
                    </Typography>
                </Box>
                <ProfessionalProfile />
                <Skills />
                <Experience />
            </Box>
        </Container>
    );
};
