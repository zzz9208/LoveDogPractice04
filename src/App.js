import { useEffect, useState } from 'react';
import './App.css';

// secret 키 바꾸고, 깃헙에 재업로드해야 반영

function App() {
  cosnt [mobile, setMobile] = useState(null);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // mobile   
      setMobile(true);
      console.log("Mobile")
    } else {
      // desktop      
      setMobile(false);
      console.log("Not Mobile")
    }
  }, []);

  
  const myText = process.env.REACT_APP_ACTION_TEXT;
  console.log("my text is,,,,,,,,,,,")
  console.log(myText)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit 84
          {myText}
          my device
          {mobile}
        </p>
    
      </header>
    </div>
  );
}

export default App;
