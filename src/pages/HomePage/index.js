import React, { useEffect, useState } from 'react'
import { useGenreIndex } from './useGenreIndex';

const HomePage = () => {
    const genres = useGenreIndex()
    
    
    return (
  <div className="App">
    <h1>Gêneros dos filmes:</h1>
    <ul>
        {
          genres.map(genre => 
            <li> {genre.name} </li>
            )
        }
    </ul>
    {/* <h1>Adicionar um gênero:</h1> */}
    {/* <input onChange={setInput} type="text" placeholder={"Adicione um gênero"}/> */}
  </div>
);
}
export default HomePage
