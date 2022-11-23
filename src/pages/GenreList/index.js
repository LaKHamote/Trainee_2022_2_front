import Genres from '../../components/genres';
import { Link, useNavigate } from 'react-router-dom';

const GenreList = () =>{
    const navigate = useNavigate();

    return(
        <>
            <Genres />
            {/* <Link style={{color: 'white'}} to="/criar">Adicionar Gênero</Link> */}
            <p onClick={() => navigate('/criar')}>Criar</p>
        </>
    )
}

export default GenreList;