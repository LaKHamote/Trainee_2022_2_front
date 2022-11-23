import AddGenre from "../../components/add_genre";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const GenreCreate = () => {
    const navigate = useNavigate();

    return (
        <>
            <AiOutlineArrowLeft onClick={() => navigate(-1)} />
            <AddGenre />
        </>
    )
}

export default GenreCreate;