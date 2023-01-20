import logo from './logo.svg';
import './App.css';
import { Button } from 'uicomponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          <Button variant="primary">hello</Button>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
