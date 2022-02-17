import React,{useState,useEffect} from "react";
import {addDoc,doc,getDoc,setDoc,collection, updateDoc} from "firebase/firestore";
import {db,auth} from '../firebase-config';
import {useNavigate,Link} from 'react-router-dom';
import {storage} from '../firebase-config';
import {ref} from '@firebase/storage';
import Hamburger from 'hamburger-react';
import image from '../img/Vector.svg';
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import pfp1 from "../img/pfp-happy.svg";
import pfp2 from "../img/pfp-mad.svg";
import pfp3 from "../img/pfp-sad.svg";
import pfp4 from "../img/pfp-love.svg";
import pfp5 from "../img/pfp-worry.svg";
function CreatePost({user,setOpen, setCurrentPage,isAuth,posts}){
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    // setCurrentPage("글쓰기");
    const [title,setTitle] = useState("");
    const [postText,setPostText] = useState("");
    let navigate = useNavigate();
    const [emotionSelect,setEmotionSelect] = useState(1);
    const postName = 'post'+String(emotionSelect);
    console.log(postName);
    const postsCollectionRef = collection(db, postName);
    const createPost = async () => {
        const docnumdoc = doc(db, 'docnum','IYhbCxzVItcNB9GNBaRm');
        const docSnap = await getDoc(docnumdoc);
        var docnum = docSnap.data().docnum;
        docnum = docnum +1 ;
        await updateDoc(docnumdoc,{docnum:docnum});
        docnum = String(docnum);
        await setDoc(doc(db,postName,docnum), {title,postText,emotion:emotionSelect,comment:[],commentCount:0,author:{name:user.displayName,id:user.uid},likeCount:0,like:[]});
        await setDoc(doc(db,'posts',docnum),{title,postText,emotion:emotionSelect,comment:[],commentCount:0,author:{name:user.displayName,id:user.uid},likeCount:0,like:[]});
        navigate('/emotiontotal');
    }
    useEffect(()=>{
        if(!isAuth){
            navigate('/login');
        }
    })
    
    return(
        <div className = "createPostPage">
             <div className="headerTab1">
                {emotionSelect==1?<div><div onClick={()=>{setEmotionSelect(1);}}className="headerTabButton2"><img id="headerTabButtonImg100" src={pfp1}/><h3 id="headerTabButtonTxt1" className="subhead100">기쁨</h3></div></div>:<div><div onClick={()=>{setEmotionSelect(1);}}className="headerTabButton"><img id="headerTabButtonImg70" src={pfp1}/><h3 id="headerTabButtonTxt02" className="subhead100">기쁨</h3></div></div>}
                {emotionSelect==2?<div><div onClick={()=>{setEmotionSelect(2);}}className="headerTabButton2"><img id="headerTabButtonImg100" src={pfp2}/><h3 id="headerTabButtonTxt1" className="subhead100">분노</h3></div></div>:<div><div onClick={()=>{setEmotionSelect(2);}}className="headerTabButton"><img id="headerTabButtonImg70" src={pfp2}/><h3 id="headerTabButtonTxt02" className="subhead100">분노</h3></div></div>}
                {emotionSelect==3?<div><div onClick={()=>{setEmotionSelect(3);}}className="headerTabButton2"><img id="headerTabButtonImg100" src={pfp3}/><h3 id="headerTabButtonTxt1" className="subhead100">슬픔</h3></div></div>:<div><div onClick={()=>{setEmotionSelect(3);}}className="headerTabButton"><img id="headerTabButtonImg70" src={pfp3}/><h3 id="headerTabButtonTxt02" className="subhead100">슬픔</h3></div></div>}
                {emotionSelect==4?<div><div onClick={()=>{setEmotionSelect(4);}}className="headerTabButton2"><img id="headerTabButtonImg100" src={pfp4}/><h3 id="headerTabButtonTxt1" className="subhead100">걱정</h3></div></div>:<div><div onClick={()=>{setEmotionSelect(4);}}className="headerTabButton"><img id="headerTabButtonImg70" src={pfp4}/><h3 id="headerTabButtonTxt02" className="subhead100">걱정</h3></div></div>}
                {emotionSelect==5?<div><div onClick={()=>{setEmotionSelect(5);}}className="headerTabButton2"><img id="headerTabButtonImg100" src={pfp5}/><h3 id="headerTabButtonTxt1" className="subhead100">사랑</h3></div></div>:<div><div onClick={()=>{setEmotionSelect(5);}}className="headerTabButton"><img id="headerTabButtonImg70" src={pfp5}/><h3 id="headerTabButtonTxt02" className="subhead100">사랑</h3></div></div>}
            </div>
            <div className="createPostBox">
                <div className="diaryTitle">
                    <input className="diaryTitleInput" onChange={(event) => {setTitle(event.target.value);}}placeholder="일기 제목을 입력해주세요."></input>
                </div>
                <div className="diaryContent">
                    <textarea className="diaryContentInput" onChange={(event) => {setPostText(event.target.value);}}placeholder="어떤 감정을 느끼고 계신가요?"></textarea>
                </div>
                <button onClick={()=>{createPost()}}className="createPostButton"><h2 className="subhead100">등록하기</h2></button>
            </div>
            
        </div>
    )
}
export default CreatePost;