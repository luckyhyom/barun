import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SelectLabels from "./Seletor";
import Grid from "@mui/material/Unstable_Grid2";
import OutlinedButtons from "./Button";

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Typography variant="h3" gutterBottom>
                    New Service Order
                </Typography>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Search For Company"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Search For Client"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Search For Client"
                        variant="outlined"
                    />
                </Box>
                <React.Fragment>
                    <Container
                        maxWidth="xl"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0 100px",
                            border: "1px white solid",
                            borderRadius: "18px",
                            padding: "20px 40px",
                        }}
                    >
                        <Box sx={{ width: "100%" }}>
                            <Typography
                                textAlign="left"
                                variant="h6"
                                gutterBottom
                            >
                                BARUN CORP Client info
                            </Typography>
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            >
                                <Grid xs={6}>
                                    <SelectLabels></SelectLabels>
                                </Grid>
                                <Grid xs={6}>
                                    <SelectLabels></SelectLabels>
                                </Grid>
                                <Grid xs={6}>
                                    <SelectLabels></SelectLabels>
                                </Grid>
                                <Grid xs={6}>
                                    <SelectLabels></SelectLabels>
                                </Grid>
                            </Grid>
                            <Typography
                                textAlign="left"
                                variant="h6"
                                gutterBottom
                            >
                                BARUN CORP User info
                            </Typography>
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            >
                                <Grid xs={6}>
                                    <SelectLabels></SelectLabels>
                                </Grid>
                                <Grid xs={6}>
                                    <SelectLabels></SelectLabels>
                                </Grid>
                            </Grid>
                        </Box>
                        <OutlinedButtons></OutlinedButtons>
                    </Container>
                </React.Fragment>
            </Container>
        </React.Fragment>
    );
}
