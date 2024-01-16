import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const buttonStyle = {backgroundColor: "#300b96", color: "#fff", fontFamily: "Avenir"}
const textStyle = {fontWeight: "bold", color: "#300b96", fontFamily: "Avenir" };
const cardStyle = {
    m: 5,
    padding: 2,
    width: 300,
    height: 475,
    borderRadius: 5,
    backgroundColor: "transparent",
    boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)"
  };

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getAllPlayers = async () => {
      const APIResponse = await fetchAllPlayers();
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    };
    getAllPlayers();
  }, []);
  const searchedPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <>
    <Grid container sx={{ display: "flex", justifyContent: "flex-start", marginLeft: 10 }}>

      <TextField
        label="Search"
        variant="outlined"
        sx={{justifyContent: "left", boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)"}}
        placeholder="search"
        value={searchParam}
        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
        />
        </Grid>
      <Grid container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {searchedPlayers.map((player) => (
          <div item key={player.id}>
            <Card
              sx={cardStyle}
            >
              <CardMedia>
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  style={{ height: 350, borderRadius: 10, marginTop: 5 }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h5" component="div" 
                    sx={textStyle}>
                  {player.name}
                </Typography>
                <Button
                  variant="contained"
                  style={buttonStyle}
                  onClick={() => navigate(`/players/${player.id}`)}
                >
                  More information
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default AllPlayers;
