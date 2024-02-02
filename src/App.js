import './App.css';
// import dotenv from 'dotenv';

// dotenv.config();

function App() {
  const myText = process.env.REACT_APP_ACTION_TEXT;
  console.log("my text is,,,,,,,,,,,")
  console.log(myText)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit 52
          {myText}
        </p>
    
      </header>
    </div>
  );
}

export default App;
