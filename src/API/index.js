
export const fetchAllPlayers = async () => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT/players/');
        const result = await response.json();
        console.log(result);
        return(result);
    } catch(e) {
        console.error(e);
    }
}

export const fetchSinglePlayer = async (id) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT/players/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const createPlayer = async (name, breed) => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT/players/', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, breed
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const deletePlayer = async (id) => {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT/players/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}