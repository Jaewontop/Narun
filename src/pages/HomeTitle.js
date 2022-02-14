import React, { useState,useEffect } from "react";
import { getDoc, updateDoc,arrayUnion, onSnapshot, collection, deleteDoc, doc, arrayRemove, QuerySnapshot ,query} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import {Link} from 'react-router-dom';
import {storage} from '../firebase-config';
import {ref} from '@firebase/storage';
import { getDownloadURL} from "firebase/storage";
import pfp from '../img/pfp.svg';
import messenger from '../img/Union.svg';
import heart from '../img/heart.svg';
import CommentMore from './CommentMore';
import { browserSessionPersistence, setPersistence } from "firebase/auth";
// let commentToggle=[];
function HomeTitle({ setIsAuth,isAuth,posts }) {
  const [postLists, setPostList] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentToggle,setCommentToggle] =useState('asd');


  // let profileImg = '';
  // console.log(posts);
  const postsCollectionRef = collection(db, posts);
  // console.log("home");
  useEffect(()=>{
    // setPersistence(auth,browserSessionPersistence ).then(()=>{console.log("success")});
    // console.log("home1");
    // console.log(comment);
    // console.log(comment);
    onSnapshot(postsCollectionRef, (snapshot)=>
      setPostList(snapshot.docs.map((doc)=>({
        ...doc.data(),firstComment:doc.data().comment[0],firstPeople:doc.data().commentPeople[0],id:doc.id
      })))
    );
    // const q = query(collection(db,'posts'));
    // const unsubscribe = onSnapshot(q, (querySnapshot)=>{
    //   querySnapshot.forEach((doc)=>{
    //     setComments(doc.data().comment)
    //   })
    // })
  },false)
  // getDownloadURL(ref(storage, 'files/st_pfp1.svg'))
  // .then((url) => {
  //     //inserted into an <img> element
  //     const img = document.getElementById('myimg');
  //     img.setAttribute('src', url);
  //     profileImg = url;
  //     // console.log(profileImg);
  // })
  // .catch((error) => {
  //     console.log(error);
  // });
  // console.log(posts[0].commentCount);
  const deletePost = async (id) => {
    const postDoc = doc(db, posts, id);
    await deleteDoc(postDoc);
  };
  const addComment = async (id) =>{
    // var input = document.getElementById('commentAddInput');
    // input.value('');
    const postDoc = doc(db, posts, id);
    const docSnap = await getDoc(postDoc);
    let commentCount = docSnap.data().commentCount;
    commentCount =  commentCount +1;
    await updateDoc(postDoc,{comment:arrayUnion(comment),commentPeople:arrayUnion(auth.currentUser.displayName),commentCount:commentCount});
  };
  const commentToggles = async (id) =>{
    setCommentToggle(id);
  }
  const addLike = async (id) =>{
    if(isAuth){
      const postDoc = doc(db, posts, id);
      const docSnap = await getDoc(postDoc);
      let likeCount = docSnap.data().likeCount;
      var userLike = 0;
      // like 하는 사람이 user인지 확인
      if(likeCount>0){
        docSnap.data().like.forEach(liker=>
          {
            if(liker===auth.currentUser.uid){
              userLike = 1;
            };
          }
        )
      }
  
      if(userLike){
        likeCount = likeCount - 1;
        await updateDoc(postDoc,{likeCount:likeCount,like:arrayRemove(auth.currentUser.uid)});
      }
      else{
        likeCount = likeCount+1;
        await updateDoc(postDoc,{likeCount:likeCount,like:arrayUnion(auth.currentUser.uid)});

      }
    }
    else{
      alert("로그인해주세요");
    }
  }
  const inputPress = async(e,id) => {
    console.log("inputkeypressed, e:"+e+" id:"+id);
    if(e.key=='Enter'){
      await addComment(id);
    }
  }
  const commentButtonStyle={
    postion:"absolute",
    bottom:"0",
    right:"0"
  }
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <img className="pfpimage" src={pfp}/>
              <h5 id="postAuthorName"className="point100">{post.author.name}</h5>
              {/* <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div> */}
            </div>
            
            <div className="postTextContainer"> {post.postText} </div>
            <div className="likeAndComment">
              <button className="likeButton" id={post.id} onClick={()=>{if(post.author.id===auth.currentUser.uid){alert("본인 게사물에는 좋아요를 누를 수 없습니다")} else{addLike(post.id);}  }}><img src={heart}/><h2 id="wholikeTxt"className="caption100"> 님 외 여러 명이 좋아합니다.</h2></button>
              <div className="commentCount"><img src={messenger}/><h2 id="commentCountTxt"className="caption100">{post.commentCount}{auth.currentUser.displayName}</h2></div>
            </div>
            {(post.commentCount<=1)?
               <>
                <hr className="breakLine"/>
                <div className="commentAndPeople">
                  <h1 className="caption150">{post.firstPeople}</h1> <p className="postMainComment">{post.firstComment}</p>
                </div>
               </>
              :commentToggle!=post.id?(
              <div id="commentShow">
                <hr className="breakLine"/>
                <div className="commentAndPeople">
                  <h1 className="caption150">{post.firstPeople}</h1> <p className="postMainComment">{post.firstComment}</p>
                </div>
                <button onClick={()=>{commentToggles(post.id)}} className="commentMoreButton" id="commentMoreTxt"><h3 className="subhead100">댓글더보기 &gt;</h3></button>
              </div>)
              :
              (<div className="commentShowBox">{post.comment.map((com,index)=>{return <div id="commentShow">
                <hr className="breakLine"/>
                <div className="commentAndPeople">
                  <h1 className="caption150">{post.commentPeople[index]}</h1> <p className="postMainComment">{com}</p>
                </div>
            </div>})}</div>)
            }
            <div className="inputAndButton">
              <input onBlur={(e)=>{var input = document.getElementById(post.id+'button');input.style.display="none";}} onFocus={(e)=>{var input = document.getElementById(post.id+'button');input.style.display="block";}} id="commentAddInput"onKeyPress={(e)=>{inputPress(e,post.id)}} className="postCommentInput" placeholder="회원님의 생각을 전달해주세요." onChange={(event)=>{setComment(event.target.value)}}/>
              <button id={post.id+'button'} style={commentButtonStyle} className="commentSendButton" onClick={()=>{addComment(post.id)}}>+</button> 
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeTitle;