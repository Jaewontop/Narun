import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {signOut} from "firebase/auth";
import {auth} from "../firebase-config";
import HomeTitle from './HomeTitle';
import {useNavigate} from 'react-router-dom';
import pfp0 from '../img/pfp-all.svg';
import pfp1 from "../img/pfp-happy.svg";
import pfp2 from "../img/pfp-mad.svg";
import pfp3 from "../img/pfp-sad.svg";
import pfp4 from "../img/pfp-love.svg";
import pfp5 from "../img/pfp-worry.svg";

function Emotion5({user,setOpen,setIsAuth, isAuth}){
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    var navigate = useNavigate();
    
    if(!isAuth){
        navigate("/login");
    }
    
    return(
        <div className="Emotion1">
            <div className="headerTab">
                <div><Link className="headerTabButton" to='/emotiontotal'><img id="headerTabButtonImg70" src={pfp0}/><h3 id="headerTabButtonTxt02" className="subhead100">전체</h3></Link></div>
                <div><Link className="headerTabButton1" to='/emotion1'><img id="headerTabButtonImg70" src={pfp1}/><h3 id="headerTabButtonTxt02" className="subhead100">기쁨</h3></Link></div>
                <div><Link className="headerTabButton1" to='/emotion2'><img id="headerTabButtonImg70" src={pfp2}/><h3 id="headerTabButtonTxt02" className="subhead100">분노</h3></Link></div>
                <div><Link className="headerTabButton1" to='/emotion3'><img id="headerTabButtonImg70" src={pfp3}/><h3 id="headerTabButtonTxt02" className="subhead100">슬픔</h3></Link></div>
                <div><Link className="headerTabButton1" to='/emotion4'><img id="headerTabButtonImg70" src={pfp4}/><h3 id="headerTabButtonTxt02" className="subhead100">걱정</h3></Link></div>
                <div><Link className="headerTabButton1" to='/emotion5'><img id="headerTabButtonImg100" src={pfp5}/><h3 id="headerTabButtonTxt1" className="subhead100">사랑</h3></Link></div>
            </div>
            <div className="posts">
                <HomeTitle user={user}setIsAuth={setIsAuth} isAuth = {isAuth} posts={"post5"} />
            </div>
        </div>
    )
}

export default Emotion5;