import logo from './logo.svg';
import './App.css';
import AddGenre from './components/add_genre';
import Genres from './components/genres';
import { useEffect, useState } from 'react';
import { api } from './services/api';
import Input from './components/Input';

function App() {
  const [genres, setGenres] = useState([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    api.get("/genre/index")
    .then((response) => setGenres(response.data))
  }, []);

  const add_genre = async (input) => {
    try {
      const nome = input
      console.log(nome)
      const response = await api.post("/genre/create", {
        genre: {
            // name: input.value
            name: input
        }
      })

      if (response.data) {
        setGenres([...genres, response.data])
          alert("Genero criado com sucesso")
      }
    } catch(e) {
      alert(e)
    }
    
  }

  return (
    <div className="App">
      {/* <AddGenre /> */}
      <h1>Gêneros dos filmes:</h1>
      <ul>
          {
              genres.map(genre => 
                  <li> {genre.name} </li>
              )
          }
      </ul>
      <h1>Adicionar um gênero:</h1>
      <input onChange={setInput} type="text" placeholder={"Adicione um gênero"}/>
      <button onClick={() => add_genre(input.target.value)}>Criar!</button>
    </div>
  );
}

export default App;
