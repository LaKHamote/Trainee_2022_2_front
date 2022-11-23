import { useEffect, useState } from "react"
import { api } from "../../services/api";

const Genres = () => {
    const [genres, setGenres] = useState();

    useEffect(() => {
        api.get("/genre/index")
        .then((response) => 
            setGenres(response.data)
        ).catch((err) => {
            console.log("deu ruim: " + err);
        });
    }, []);

    return (
        <>
            <h1>Gêneros dos filmes:</h1>
            <ul>
                {
                    genres.map(genre => 
                        <li> {genre.name} </li>
                    )
                }
            </ul>
        </>
    )
}

export default Genres