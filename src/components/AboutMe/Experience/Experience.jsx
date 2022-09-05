import { Typography } from "@mui/material";
import { myProjects } from "../../../constants";
import { Project } from "../Project/Project";

export const Experience = () => {
    return (
        <>
            <Typography variant="h4" align="center">
                Professional Experience
            </Typography>
            {myProjects.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </>
    );
};
