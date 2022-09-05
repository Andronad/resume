import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from "@mui/material";
import { skillsSummary } from "../../../constants";

export const Skills = () => {
    return (
        <>
            <Typography align="center" variant="h4">
                skills summary
            </Typography>
            <TableContainer component={Card}>
                <Table>
                    <TableBody>
                        {skillsSummary.map((e, i) => (
                            <TableRow key={i}>
                                <TableCell>{e.key}</TableCell>
                                <TableCell
                                    sx={{ borderLeft: "1px solid #e0e0e0" }}
                                >
                                    {e.value}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
