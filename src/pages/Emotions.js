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
                
            </div>
        </div>
    )
   
}
export default Emotions
