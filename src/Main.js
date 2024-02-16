import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Main = (props) => {
    const movePage = useNavigate();
    function gohome(){
        movePage('/core');
    }
    function exithome(){
        //movePage("https://google.com");
        window.close();
        // if ( $.browser.msie ) {	
        //     window.opener='Self';	
        //     window.open('','_parent','');	
        //     window.close();
        // } else {	
        //     window.close(); // 일반적인 현재 창 닫기	
        //     window.open('about:blank','_self').self.close();  // IE에서 묻지 않고 창 닫기
        // }
    }



    //const [mobile, setMobile] = useState(null);
    // useEffect(() => {
    //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    //   if (isMobile) {
    //     // mobile   
    //     setMobile(true);
    //     console.log("Mobile", mobile, mobile !== null ? mobile.toString(): "null" )
    //   } else {
    //     window.close();
    //     // desktop      
    //     setMobile(false);
    //     console.log("Not Mobile", mobile, mobile !== null ? mobile.toString(): "null")
    //   }
    // }, [mobile]);


    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          // mobile   
        //   setMobile(true);
        //   console.log("Mobile", mobile, mobile !== null ? mobile.toString(): "null" )
        // console.log("Mobile", mobile, mobile !== null ? mobile.toString(): "null" )
         } else {
        console.log("Mobile")
          window.close();
          // desktop      
        //   setMobile(false);
        //   console.log("Not Mobile", mobile, mobile !== null ? mobile.toString(): "null")
        }
      }, []);
  


	return (
		<>
        <button onClick={() => window.open("https://google.com")}>google</button>
        <button onClick={() => gohome()}>core</button>
        <button onClick={() => exithome()}>외부</button>
		<h3>안녕하세요. 메인페이지06 입니다.</h3>
        <p>
          my device is 
          {/* {ismobile !== null ? ismobile.toString(): "null"} */}
        </p>
		</>
	);
};

export default Main;
