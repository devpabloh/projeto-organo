import logo from './logo.svg';
import './App.css';
import Banner from "./componentes/Banner/Banner"

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <Banner></Banner>
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
