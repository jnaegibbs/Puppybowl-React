import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { fetchSinglePlayer, deletePlayer } from "../API";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";


const buttonStyle = {backgroundColor: "#300b96", color: "#fff", fontFamily: "Avenir"}
const textStyle = {fontWeight: "bold", color: "#300b96", fontFamily: "Avenir" };
const singleCard = { 
    m: 5, 
    padding: 5, 
    width: 350, 
    height: 540, 
    borderRadius: 5, 
    background: "transparent", 
    boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)"
    }

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getSinglePlayer = async () => {
            const APIresponse = await fetchSinglePlayer(id);
            if (APIresponse.success) {
                setPlayer(APIresponse.data.player)
            } else {
                setError(error.message);
            }
        }
        getSinglePlayer();
    }, []);

    const handleDelete = async () => {
        try {
            const result = await deletePlayer(player.id);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Grid container sx={{justifyContent: "center"}}>
                <div item key={player.id}>
                    <Card sx={singleCard}>
                        <Typography variant="h5" component="div" sx={textStyle}>
                            {player.name}
                        </Typography>
                        <CardMedia >
                            <img
                                src={player.imageUrl}
                                alt={player.name}
                                style={{ height: 325, borderRadius: 5 }}
                            />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" component="div" sx={textStyle}>
                                {player.breed}
                            </Typography>
                            <Typography variant="h6" component="div" sx={textStyle}>
                                Status: {player.status}
                            </Typography>
                            <Typography variant="h6" component="div" sx={textStyle}>
                                Team: {player.teamId}
                            </Typography>
                            <Button variant="contained" onClick={handleDelete} sx={buttonStyle}>
                                Delete Player
                            </Button>
                        </CardContent>
                    </Card>
                </div>

            </Grid>

        </div>
    )
}

export default SinglePlayer