import {
    Card,
    CardContent,
    Divider,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { hardSkills, softSkills } from "../../../constants/index";

export const ProfessionalProfile = () => {
    return (
        <>
            <Typography align="center" variant="h4">
                Professional Profile
            </Typography>
            <Card>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Typography align="center">Hard Skills</Typography>
                            <List>
                                {hardSkills.map((e, i) => (
                                    <ListItem disablePadding key={i}>
                                        <Typography>{e}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={1}>
                            <Divider orientation="vertical" variant="middle" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography align="center">Soft Skills</Typography>
                            <List>
                                {softSkills.map((e, i) => (
                                    <ListItem disablePadding key={i}>
                                        <Typography>{e}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};
