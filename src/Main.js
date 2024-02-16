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


	return (
		<>
        <button onClick={() => window.open("https://google.com")}>google</button>
        <button onClick={() => gohome()}>core</button>
        <button onClick={() => exithome()}>외부</button>
		<h3>안녕하세요. 메인페이지01 입니다.</h3>
		</>
	);
};

export default Main;
