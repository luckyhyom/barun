import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined">Save & Next</Button>
            <Button variant="outlined">Add Client Contact +</Button>
            <Button variant="outlined">Add Manager +</Button>
            <Button variant="outlined">Add Project +</Button>
        </Stack>
    );
}
