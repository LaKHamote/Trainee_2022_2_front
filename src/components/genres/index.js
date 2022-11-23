import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { api } from "../../services/api";

const Genres = () => {
    const [genres, setGenres] = useState([]);

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
                        <li key={genre.id}><Link style={{color: 'white'}} to={`/genero/${genre.id}`}>{genre.name}</Link> </li>
                    )
                }
            </ul>
        </>
    )
}

export default Genres