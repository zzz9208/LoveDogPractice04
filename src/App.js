import './App.css';

// secret 키 바꾸고, 깃헙에 재업로드해야 반영

function App() {
  const myText = process.env.REACT_APP_ACTION_TEXT;
  console.log("my text is,,,,,,,,,,,")
  console.log(myText)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit 79
          {myText}
        </p>
    
      </header>
    </div>
  );
}

export default App;
