import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
    const movePage = useNavigate();
    function gohome(){
        movePage('/core');
    }
    function exithome(){
        //movePage("https://google.com");
        window.close();
    }




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





	return (
		<>
        <button onClick={() => window.open("https://google.com")}>google</button>
        <button onClick={() => gohome()}>core</button>
        <button onClick={() => exithome()}>외부</button>
		<h3>안녕하세요. 메인페이지03 입니다.</h3>
        <p>
          my device is 
          {mobile !== null ? mobile.toString(): "null"}
        </p>
		</>
	);
};

export default Main;
