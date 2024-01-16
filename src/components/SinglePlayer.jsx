import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { fetchSinglePlayer, deletePlayer } from "../API";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";


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
            <Grid >

                <div item key={player.id}>
                    <Card sx={{ m: 5, padding: 2, width: 350, height: 540 }}>
                        <Typography variant="h5" component="div">
                            {player.name}
                        </Typography>
                        <CardMedia >
                            <img
                                src={player.imageUrl}
                                alt={player.name}
                                style={{ height: 325 }}
                            />
                        </CardMedia>
                        <CardContent>

                            <Typography variant="h6" component="div">
                                {player.breed}
                            </Typography>
                            <Typography variant="h6" component="div">
                                Status: {player.status}
                            </Typography>
                            <Typography variant="h6" component="div">
                                Team: {player.teamId}
                            </Typography>
                            <Button variant="contained" onClick={handleDelete}>
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