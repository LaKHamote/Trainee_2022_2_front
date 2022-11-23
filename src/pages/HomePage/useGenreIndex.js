import { useEffect, useState } from 'react'
import { api } from '../../services/api';

export const useGenreIndex = () => {
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
        api.get("/genre/index")
        .then((response) => setGenres(response.data))
    }, []);

    return genres
}
