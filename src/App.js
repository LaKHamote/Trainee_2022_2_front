import logo from './logo.svg';
import './App.css';
import AddGenre from './components/add_genre';
import Genres from './components/genres';

function App() {
  return (
    <div className="App">
      <p>
        Olá trainees.
      </p>
      {/* <AddGenre /> */}
      <Genres />
    </div>
  );
}

export default App;
