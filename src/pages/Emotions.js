import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {signOut} from "firebase/auth";
import {auth} from "../firebase-config";
import Hamburger from 'hamburger-react';
import image from '../img/Vector.svg';
function Emotions({setOpen,setCurrentPage,setIsAuth,isAuth}){
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
   setCurrentPage("나른 PFP");
   console.log(isAuth);
    return(
        
        <div className="EmotionsBox">
            <div className="Emotions">
                <Link to='/emotion1' className="emotionBox">
                    <div className="emotionImage"></div>
                    <div className="emotionName">기쁨</div>
                </Link>
                <Link to='/emotion2' className="emotionBox">
                    <div className="emotionImage"></div>
                    <div className="emotionName">분노</div>
                </Link>
                <Link to='/emotion3' className="emotionBox">
                    <div className="emotionImage"></div>
                    <div className="emotionName">슬픔</div>
                </Link>
                <Link to='/emotion4' className="emotionBox">
                    <div className="emotionImage"></div>
                    <div className="emotionName">걱정</div>
                </Link>
                <Link to='/emotion5' className="emotionBox">
                    <div className="emotionImage"></div>
                    <div className="emotionName">사랑</div>
                </Link>
                <Link to='/emotion6' className="emotionBox">
                    <div className="emotionImage"></div>
                    <div className="emotionName">증오(욕심)</div>
                </Link>
            </div>
        </div>
    )
   
}
export default Emotions
