import React, { useState } from "react";
import {
  Stack,
  Button,
  Toolbar,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonStyle = {backgroundColor: "#300b96", color: "#fff"}
  const textStyle = {fontWeight: "bold", color: "#300b96", fontFamily: "Avenir" };

  return (
    <Container>
      <Stack spacing={5} direction="row" style={{ margin: 40 }}>
      <Typography variant="h3" sx={textStyle}>
      Puppy bowl with React
    </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          style={buttonStyle}
        >
          Home
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/NewPlayerForm")}
          style={buttonStyle}
        >
          Add New Player
        </Button>
      </Stack>
    </Container>
  );
};

export default NavBar;
