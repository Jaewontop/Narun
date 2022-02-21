import React from "react";
import {useRef,useState,useEffect} from 'react';
import image from '../img/Frame 1.svg';
import {signInWithCredential, signInWithPopup, signInWithRedirect} from 'firebase/auth';
import {signup,useAuth,logout,auth,provider} from '../firebase-config';
import {useNavigate,Link} from 'react-router-dom';
import {signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
    
function Login({toggleButton,setOpen,setCurrentPage,setIsAuth,isAuth}){
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage("로그인");
    let navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginSuccess,setLoginSuccess] = useState(true);
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/emotiontotal");
        })
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
            setLoginSuccess(false);
        }
        
        
    };
    return(
            <div className="login">
                <div className="loginPost">사람들의 감정은<br/>어떤지 살펴볼까요?</div>
                <div className="loginButtons">
                    <div className="loginText">우선, 로그인이 필요해요.</div>
                    <input className="loginID" placeholder="아이디(이메일)" onChange={(event) => {setLoginEmail(event.target.value);}}></input>
                    <input className="loginPW" type="password" placeholder="비밀번호" onChange={(event) => {setLoginPassword(event.target.value);}}></input>
                    {loginSuccess?(<></>):(<div className="registerPasswordFalse">등록되지 않은 이메일이거나, 비밀번호가 일치하지 않아요.</div>)}
                </div>
                <div>
                    <button onClick={()=>{login()}}className="loginButton">로그인</button>
                    <div className="loginFindandSignup">
                        <Link to='/mypage' className="loginFindandSignupText">아이디 찾기</Link>
                        <div className="loginBreakLine" >|</div>
                        <Link to='/mypage'className="loginFindandSignupText">비밀번호 찾기</Link>
                        <div className="loginBreakLine">|</div>
                        <Link to='/signup' className="loginFindandSignupText">회원가입</Link>
                    </div>
                </div>
            
                <button className="login-with-google-btn" onClick={signInWithGoogle}>
                <img className="googleImage" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="/>
                구글 로그인
                <img className="googleImage" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="/>
                </button>
                {/* <img className="loginBoxVector" src={image}></img> */}
            </div>
        
    );
}
export default Login;