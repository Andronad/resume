import { Card, CardContent, Grid } from "@mui/material";

export const Project = ({ project }) => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2} sx={{ fontFamily: "Hanalei Fill" }}>
                    <Grid item xs={2}>
                        {project.duration}
                    </Grid>
                    <Grid item xs={10} sx={{ borderLeft: "1px solid #e0e0e0" }}>
                        {project.company}
                    </Grid>
                    <Grid item xs={2}>
                        {"Project: "}
                    </Grid>
                    <Grid item xs={10} sx={{ borderLeft: "1px solid #e0e0e0" }}>
                        {project.name}
                    </Grid>
                    <Grid item xs={2}>
                        {"Responsibilities:"}
                    </Grid>
                    <Grid item xs={10} sx={{ borderLeft: "1px solid #e0e0e0" }}>
                        {project.responsibilities.map((e, i) => (
                            <div key={i}>{`•  ${e}`}</div>
                        ))}
                    </Grid>
                    <Grid item xs={2}>
                        {"Skills:"}
                    </Grid>
                    <Grid item xs={10} sx={{ borderLeft: "1px solid #e0e0e0" }}>
                        {project.skills}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
