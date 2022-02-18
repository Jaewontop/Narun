import React,{useEffect, useState} from 'react';
// import image1 from '../img/_illust-1.svg';
import image2 from '../img/illust-2.svg';
import image3 from '../img/illust-3.svg';
import image4 from '../img/illust-4.svg';
import { Link } from 'react-router-dom';
const Home = ({setOpen,setCurrentPage}) => {
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage('About 나른');
    return (
        <div className="home">
            <div className="home_body">
                <div className="home_body1">
                    {/* <img className="homeImage1"src={image1}></img> */}
                    <div className="home_body_title1">감정의 안식처,<br/>나른 스페이스입니다.</div>
                    <div className="home_body_content1">마음 속에 쌓여있던 당신의 이야기를<br/>사람들과 나눠보세요.</div>
                    <div className="home_1_buttons">
                        <button className="home_buttons1_1"><Link className="home_button_link" to='/emotiontotal'>나른 스페이스 시작하기</Link></button>
                    </div>
                </div>
                <div className="home_body2">
                    <div className="home_body_title2">쌓인 감정은<br/>외로움을 만들어요.</div>
                    <img className="homeImage1"src={image2}></img>
                    <div className="home_body_content2">당신의 감정을 나른 스페이스에 올려보세요.<br/>어떤 감정이든 나른 회원 여러분들이<br/>모두 공감해줄거에요.</div>
                    {/* <Link to='/createpost' className="home_2_button">일기 남기러 가기 &gt;</Link> */}
                </div>
                <div className="home_body2">
                    <div className="home_body_title2">다른 사람들은<br/>무슨 감정일까요?</div>
                    <img className="homeImage1"src={image3}></img>
                    <div className="home_body_content2">나른 스페이스에는<br/>당신의 귀를 빌리고 싶어하는 행성들이 많이 있어요.<br/>잠시 귀를 빌려주는 건 어떨까요?</div>
                    {/* <Link to='/createpost' className="home_2_button">일기 남기러 가기 &gt;</Link> */}
                </div>
                <div className="home_body2">
                    <div className="home_body_title2">감정에 따라 변화하는<br/>나른 스페이스 행성들</div>
                    <div className="home_body_content3">나른 스페이스 행성들은<br/>사람들의 감정에 공감하면서 모습을 바꾼답니다.<br/>흥미로운 행성들의 변화를 확인해보세요.</div>
                    <img className="homeImage1"src={image4}></img>
                    <Link to='/emotions' className="home_2_button">나른 PFP 더 보러가기 &gt;</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;