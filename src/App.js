import logo from './logo.svg';
import './App.css';

function App() {
  const myText = process.env.REACT_APP_ACTION_TEXT;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.sdfasdf
          {myText}
        </p>
    
      </header>
    </div>
  );
}

export default App;
