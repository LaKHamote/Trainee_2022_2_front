import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
        <MyRoutes/>
    </BrowserRouter>
  );
}

export default App;
