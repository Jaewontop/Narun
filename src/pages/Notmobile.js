import React from 'react';
import img from '../img/_illust-1-2.svg';
function Notmobile(props) {
    return (
        <div className="mypage">
            <h1 className="point150">나른스페이스의 행성들이 열심히 준비중입니다. 조금만 기다려주세요!</h1>
            <img src={img}></img>
        </div>
    );
}

export default Notmobile;