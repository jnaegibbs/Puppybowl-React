import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const AllPlayers = () => {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getAllPlayers = async () => {
            const APIResponse = await fetchAllPlayers();
            if (APIResponse.success) {
                setPlayers(APIResponse.data.players);
            } else {
                setError(APIResponse.error.message);
            }
        }
        getAllPlayers();
    }, []);

    return (
        <>

            <Grid sx={{ display: "flex", flexWrap: "wrap" }} >
                {players.map((player) => (
                    <div item key={player.id}>
                        <Card sx={{ m: 5, padding: 2, width: 300, height: 475 }}>
                            <CardMedia  >
                                <img
                                    src={player.imageUrl}
                                    alt={player.name}
                                    style={{height: 350}}
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography variant="h5" component="div" >
                                    {player.name}
                                </Typography>
                                <Button variant="contained" onClick={() => navigate(`/players/${player.id}`)}>
                                    More information
                                </Button>

                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Grid>

        </>
    );
}


export default AllPlayers;