import React,{useEffect} from 'react';
import img from '../img/_illust-1.svg';
const Mypage = ({setOpen,setCurrentPage}) => {
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage('마이페이지');
    return (
        <div className="mypage">
            {/* <div className="mypageIntroduction">
                <img src=""/>
                <div>
                    
                </div>
            </div> */}
            <h1 className="point150">나른스페이스의 행성들이 열심히 준비중입니다. 조금만 기다려주세요!</h1>
            <img src={img}></img>
        </div>
    );
};

export default Mypage;