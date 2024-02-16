import { useEffect, useState } from 'react';
import './App.css';

// secret 키 바꾸고, 깃헙에 재업로드해야 반영

const Core = (props) => {
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // mobile   
      setMobile(true);
      console.log("Mobile", mobile, mobile !== null ? mobile.toString(): "null" )
    } else {
      // desktop      
      setMobile(false);
      console.log("Not Mobile", mobile, mobile !== null ? mobile.toString(): "null")
    }
  }, [mobile]);

  
  const myText = process.env.REACT_APP_ACTION_TEXT;
  console.log("my text is,,,,,,,,,,,")
  console.log(myText)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit 85
          {myText}  
        </p>
        <p>
          my device is 
          {mobile !== null ? mobile.toString(): "null"}
        </p>
      </header> 
    </div>  
  );
}

export default Core;
