import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage.js'

function App() {

  console.log('This is my new tab now')

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Homepage />
    </div>
  );
}

export default App;
