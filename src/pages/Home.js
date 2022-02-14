import React,{useEffect, useState} from 'react';
import image1 from '../img/Rectangle 1.svg';
import image2 from '../img/Rectangle 1-1.svg';
import image3 from '../img/Rectangle 1-2.svg';
import image4 from '../img/Rectangle 1-3.svg';


import { Link } from 'react-router-dom';
const Home = ({setOpen,setCurrentPage}) => {
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage('About 나른');
    return (
        <div className="home">
            <div className="home_body">
                <div className="home_body1">
                    <img className="homeImage1"src={image1}></img>
                    <div className="home_body_title1">주먹 내셨죠?</div>
                    <div className="home_body_content1">그럼 제가 이겼습니다. 가소롭군요 </div>
                    <div className="home_1_buttons">
                        <button className="home_buttons1_1"><Link className="home_button_link" to='/createpost'>일기 남기기</Link></button>
                        <button className="home_buttons1_1"><Link className="home_button_link" to='/emotions'>다른 사람 일기 보러가기</Link></button>
                    </div>
                </div>
                <div className="home_body1">
                    <img className="homeImage1"src={image2}></img>
                    <div className="home_body_title2">일기를 올리고<br/>사람들과 감정을 공유하세요.</div>
                    <div className="home_body_content2">소개 텍스트의 예시 내용입니다. 한 두 줄에서 세 줄 정도 들어가는 것으로 생각하고 있어요. 밑에 바로 이동할 버튼도들어갈 거구요.</div>
                    <Link to='/createpost' className="home_2_button">일기 남기러 가기 &gt;</Link>
                </div>
                <div className="home_body1">
                    <img className="homeImage1"src={image3}></img>
                    <div className="home_body_title3">전화 하라고<br/>분명 말씀 드렸을텐데요.</div>
                    <div className="home_body_content3">소개 텍스트의 예시 내용입니다. 한 두 줄에서 세 줄 정도 들어가는 것으로 생각하고 있어요. 밑에 바로 이동할 버튼도들어갈 거구요.</div>
                    <Link to='/emotions' className="home_2_button">일기 보러가기 &gt;</Link>
                </div>
                <div className="home_body1">
                    <img className="homeImage1"src={image4}></img>
                    <div className="home_body_title1">감정의 안식처,<br/>나른에서 시작하세요.</div>
                    <div className="home_body_content1">소개 텍스트의 예시 내용입니다. 한 두 줄에서 세 줄 정도 들어가는 것으로 생각하고 있어요. 밑에 바로 이동할 버튼도들어갈 거구요.</div>
                    <div className="home_1_buttons">
                        <button className="home_buttons1_1"><Link className="home_button_link" to='/createpost'>일기 남기기</Link></button>
                        <button className="home_buttons1_1"><Link className="home_button_link" to='/emotions'>다른 사람 일기 보러가기</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;