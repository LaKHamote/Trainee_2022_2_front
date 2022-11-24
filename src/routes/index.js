import GenreCreate from '../pages/GenreCreate';
import GenreList from '../pages/GenreList';
import { Route, Routes, Navigate } from 'react-router-dom';
import GenreShow from '../pages/GenreShow';

const MyRoutes = () => {
    return(
        <Routes>
        <Route path="/" element={<GenreList/>}/>
        <Route path="criar" element={<GenreCreate/>}/>
        <Route path="/genero/:id" element={<GenreShow/>}/>
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    )
}

export default MyRoutes;
