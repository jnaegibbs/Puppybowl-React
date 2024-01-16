import React from "react";
import { Link } from 'react-router-dom'
import { Stack, Button, Toolbar, Typography, Container } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Stack spacing={5} direction="row" style={{ margin: 40 }}>
                <Typography variant="h4">
                    Puppy bowl with React
                </Typography>
                <Button variant="contained" onClick={() => navigate("/")}>
                    Home
                </Button>
                <Button variant="contained" onClick={() => navigate("/NewPlayerForm")}>
                    Add New Player
                </Button>
            </Stack>
        </Container>
    );
};

export default NavBar;