import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Container } from './styles'

const GenreShow = () => {
    const [genre, setGenre] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/genre/show/${id}`)
        .then(response => setGenre(response.data))
    }, [id])
    
    return(
        <Container>
            <AiOutlineArrowLeft size={26} onClick={() => navigate(-1)} />
            <h1>Vizualizar gênero {genre.name}</h1>
            <h2>Filmes:</h2>
            {console.log(genre)}
            {genre.movies?.map(movie => 
                <li key={movie.id}>{movie.name}</li>
            )}
        </Container>
    )
}

export default GenreShow;