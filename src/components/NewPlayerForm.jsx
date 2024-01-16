import React from "react";
import { useState } from "react";
import { createPlayer } from "../API";

const NewPlayerForm = (players, setPlayers) => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const playerData = await createPlayer (name, breed);
        if (playerData.success) {
            console.log("New Player: ", playerData.data.newPlayer);
            const newPlayerList = [...players, playerData.data.newPlayer];
            setPlayers(newPlayerList);
            setName("");
            setBreed("");
        } else {
            setError(playerData.error.message);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <input
                value={name}
                type="text"
                name="name"
                palceholder="name"
                onChange={(e) => setName(e.target.value)}
                />
            <input
                value={breed}
                type="text"
                name="breed"
                placeholder="breed"
                onChange={(e) => setBreed(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewPlayerForm