import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Main = (props) => {
    const movePage = useNavigate();
    function gohome(){
        movePage('/core');
    }
    function exithome(){
        window.close();
    }

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            console.log("Mobile")
            //window.open('http://www.google.co.kr','_self').close();
            //window.open('http://www.naver.com?','_self').close();
            // function WinClose(){
            //     window.open('http://www.naver.com?','_self').close();
            //     //window.opener=self;
            //     //window.close();
            // }
            // setTimeout(WinClose(), 3000)
        }
      }, []);
  


	return (
		<>
        <button onClick={() => window.open("https://google.com")}>google</button>
        <button onClick={() => gohome()}>core</button>
        <button onClick={() => exithome()}>외부</button>
		<h3>안녕하세요. 메인페이지32 입니다.</h3>
        <p>
          my device is 
        </p>
		</>
	);
};

export default Main;
