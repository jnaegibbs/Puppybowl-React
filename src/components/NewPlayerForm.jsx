import React from "react";
import { useState } from "react";
import { createPlayer } from "../API";
import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import PetsTwoToneIcon from "@mui/icons-material/PetsTwoTone";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "auto",
};
const inputStyle = {
  marginBottom: "10px",
};

const NewPlayerForm = ({ players, setPlayers }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const playerData = await createPlayer(name, breed, imageURL);
      if (playerData.success) {
        console.log("New Player: ", playerData.data.newPlayer);
        const newPlayerList = [...players, playerData.data.newPlayer];
        setPlayers(newPlayerList);
        setName("");
        setBreed("");
        setImageUrl("");
        setSuccessMessage(
          "You have successfully registered! Click continue to enter the website."
        );
        console.log(successMessage);
      } else {
        setError(
          <Typography fontWeight="bold" color="red">
            {playerData.error.message}
          </Typography>
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <TextField
          value={breed}
          type="text"
          name="breed"
          placeholder="Breed"
          onChange={(e) => setBreed(e.target.value)}
          style={inputStyle}
        />
        <TextField
          value={imageURL}
          type="text"
          name="Image URL"
          placeholder="Image URL"
          onChange={(e) => setImageUrl(e.target.value)}
          style={inputStyle}
        />

        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "#300b96", color: "#fff" }}
        >
          Submit
        </Button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && (
        <Typography fontWeight="bold" color="300b96">
          {successMessage} <PetsTwoTone />
        </Typography>
      )}
    </>
  );
};

export default NewPlayerForm;
