import React from "react";
import {useRef,useState,useEffect} from 'react';
import image from '../img/Frame 1.svg';
import {signInWithCredential, signInWithPopup, signInWithRedirect} from 'firebase/auth';
import {signup,useAuth,logout,auth,provider} from '../firebase-config';
import {useNavigate,Link} from 'react-router-dom';
import {signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
    
function Login({setOpen,setCurrentPage,setIsAuth,isAuth}){
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage("로그인");
    let navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            
        })
        navigate("/emotiontotal");
    }
    
    
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
            );
            setIsAuth(true);
            navigate("/emotiontotal");
            
        } catch (error) {
            console.log(error.message);
        }
        
        
    };
    return(
            <div className="login">
                <div className="loginPost">사람들의 감정은<br/>어떤지 살펴볼까요?</div>
                <div className="loginButtons">
                    <div className="loginText">우선, 로그인이 필요해요.</div>
                    <input className="loginID" placeholder="아이디(이메일)" onChange={(event) => {setLoginEmail(event.target.value);}}></input>
                    <input className="loginPW" type="password" placeholder="비밀번호" onChange={(event) => {setLoginPassword(event.target.value);}}></input>
                </div>
                <div>
                    <button onClick={()=>{login()}}className="loginButton">로그인</button>
                    <div className="loginFindandSignup">
                        <Link to='/idfind' className="loginFindandSignupText">아이디 찾기</Link>
                        <div className="loginBreakLine" >|</div>
                        <Link to='/pwfind' className="loginFindandSignupText">비밀번호 찾기</Link>
                        <div className="loginBreakLine">|</div>
                        <Link to='/signup' className="loginFindandSignupText">회원가입</Link>
                    </div>
                </div>
            
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
                {/* <img className="loginBoxVector" src={image}></img> */}
            </div>
        
    );
}
export default Login;