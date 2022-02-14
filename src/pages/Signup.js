import React,{useEffect, useState} from 'react';
import {auth,provider} from '../firebase-config';
import {updateProfile,createUserWithEmailAndPassword,signInWithCredential,signInWithPopup} from "firebase/auth";
import {useNavigate} from 'react-router-dom';

const SignUp = ({setOpen, setCurrentPage,setIsAuth}) => {
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage("회원가입");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerCheckPassword, setRegisterCheckPassword] = useState("");
    const [registerCheckBool, setRegisterCheckBool] = useState(false);
    const [registerNickname,setRegisterNickname] = useState("");
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true);//?? 뭐지 이건
            setIsAuth(true);
            navigate("/");
        })
    }
    const register = async () => {

        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword,
          );
          updateProfile(auth.currentUser,{
            displayName: registerNickname
            }).then(function() {
            console.log(registerNickname);
            })
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
        setIsAuth(true);
        // window.location.href="/emotion1";
    };
    useEffect(()=>{
        if(registerCheckPassword===registerPassword){
            setRegisterCheckBool(true);
        }
        else{
            setRegisterCheckBool(false);
        }
    },[registerCheckPassword]);
    return (
        <div className="signUp">
            <div className="loginPost">감정의 안식처, <br/>나른에 오신 것을 환영합니다.</div>
            <div className="loginButtons">
                <input className="loginID" placeholder="아이디(이메일)" onChange={(event) => {setRegisterEmail(event.target.value);}}></input>
            </div>
            <div className="loginButtons">
                <input className="loginPW" placeholder="비밀번호" onChange={(event) => {setRegisterPassword(event.target.value);}}></input>
                <input className="loginPW" placeholder="비밀번호 확인" onChange={(event) => {setRegisterCheckPassword(event.target.value);}}></input>
                {registerCheckBool?(<div className="registerPasswordTrue">두 비밀번호가 일치합니다!</div>):(<div className="registerPasswordFalse">두 비밀번호가 일치하지 않습니다!</div>)}
            </div>
            
            <div className="loginButtons">
                <input className="loginID" placeholder="닉네임" onChange={(event) => {setRegisterNickname(event.target.value);}}></input>
            </div>
            
            <button onClick={()=>{register()}}className="loginButton">회원가입 완료하기</button>
        
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Google 로그인
            </button>
            {/* <img className="loginBoxVector" src={image}></img> */}
        
        </div>
    );
};

export default SignUp;