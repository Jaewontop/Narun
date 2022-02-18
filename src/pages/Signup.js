import React,{useEffect, useState} from 'react';
import {auth,provider,db} from '../firebase-config';
import {updateProfile,createUserWithEmailAndPassword,onAuthStateChanged,signInWithCredential,signInWithPopup} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { setDoc,doc, getDoc, onSnapshot,collection, updateDoc, arrayUnion } from 'firebase/firestore';

const SignUp = ({setOpen, setCurrentPage,setIsAuth}) => {
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    setCurrentPage("회원가입");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerCheckPassword, setRegisterCheckPassword] = useState("");
    const [registerCheckBool, setRegisterCheckBool] = useState(false);
    const [registerNickname,setRegisterNickname] = useState("");
    const [nicknameCheckBool,setNicknameCheckBool] = useState(true);
    const [emailCheckBool,setEmailCheckBool] = useState(true);
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth",true);//?? 뭐지 이건
            setIsAuth(true);
            navigate("/emotiontotal");
        })
    }

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword,
          );
        const docSnap = await getDoc(doc(db,'users','nicknames'));
        var userNicknames = docSnap.data().nicknames;
        if(userNicknames.includes(registerNickname)){
            setNicknameCheckBool(false);
            return 0;
        }
        setNicknameCheckBool(true);
        await updateDoc(doc(db,'users','nicknames'),{nicknames:arrayUnion(registerNickname)});
        
          onAuthStateChanged(auth,(currentUser)=>{
            setDoc(doc(db,'users',currentUser.uid),{name:registerNickname,email:currentUser.email,introduction:"저에 대한 한 줄 소개입니다.",link:"default.instagram.com/lorem",scraplist:[]});
            
            updateProfile(auth.currentUser,{
                displayName: registerNickname
                }).then(function() {
                console.log(registerNickname);
                }).catch((error)=>{console.log(error);})
          });
          setIsAuth(true);
          navigate("/emotion1");
        //   console.log(user);
        } catch (error) {
        console.log(error.message);
          if(error.message=='Firebase: Error (auth/invalid-email).'){
              setEmailCheckBool(false);
          }
        }
        
    };
    useEffect(()=>{
        setNicknameCheckBool(true);
    },[registerNickname])
    // useEffect(()=>{
    //     const docSnap = await getDoc(doc(db,'users','nicknames'));
    //     var userNicknames = docSnap.data().nicknames;
    //     console.log(userNicknames);
    //     console.log(userNicknames.includes(registerNickname));
    //     if(userNicknames.includes(registerNickname)){
    //         setNicknameCheckBool(false);
    //     }
    //     else{
    //         setNicknameCheckBool(true);
    //     }
    // },[registerNickname])
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
                {emailCheckBool?(<></>):(<div className="registerPasswordFalse">사용할 수 없는 이메일입니다.</div>)}
            </div>
            <div className="loginButtons">
                <input className="loginPW" type="password"placeholder="비밀번호" onChange={(event) => {setRegisterPassword(event.target.value);}}></input>
                <input className="loginPW" type="password"placeholder="비밀번호 확인" onChange={(event) => {setRegisterCheckPassword(event.target.value);}}></input>
                {registerCheckBool?(<div className="registerPasswordTrue">두 비밀번호가 일치합니다!</div>):(<div className="registerPasswordFalse">두 비밀번호가 일치하지 않습니다!</div>)}
            </div>
            
            <div className="loginButtons">
                <input className="loginID" placeholder="닉네임" onChange={(event) => {setRegisterNickname(event.target.value);}}></input>
                {nicknameCheckBool?(<></>):(<div className="registerPasswordFalse">사용할 수 없는 닉네임입니다.</div>)}
            </div>
            
            <button onClick={()=>{register()}}className="loginButton">회원가입 완료하기</button>
        
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                <img className="googleImage" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="/>
                구글 로그인
                <img className="googleImage" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="/>
            </button>
            {/* <img className="loginBoxVector" src={image}></img> */}
        
        </div>
    );
};

export default SignUp;