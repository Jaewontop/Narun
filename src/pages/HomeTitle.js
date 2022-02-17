import React, { useState,useEffect } from "react";
import { getDoc, updateDoc,arrayUnion, onSnapshot, collection, deleteDoc, doc, arrayRemove, QuerySnapshot ,query} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import {Link} from 'react-router-dom';
import {storage} from '../firebase-config';
import {ref} from '@firebase/storage';
import { getDownloadURL} from "firebase/storage";
import pfp from '../img/user_avatar-default.svg';
import messenger from '../img/Union.svg';
import heart from '../img/heart.svg';
import hearted from '../img/hearted.svg';
import CommentMore from './CommentMore';
import { browserSessionPersistence, setPersistence,onAuthStateChanged } from "firebase/auth";
// let commentToggle=[];
function HomeTitle({ user,setIsAuth,isAuth,posts }) {
  const [postLists, setPostList] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentToggle,setCommentToggle] =useState('asd');

  const [whichPostUserLike,setWhichPostUserLike] = useState([]);

  const postsCollectionRef = collection(db, posts);

  useEffect(()=>{

    onSnapshot(postsCollectionRef, (snapshot)=>
      // snapshot.docs.map((doc)=>{
      //   if(doc.data().like.includes(user.uid)){

      //   }
      // })
      setPostList(snapshot.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      })))
      
    );
    console.log(postLists);
    
  },false)
  const deletePost = async (id) => {
    const postDoc = doc(db, posts, id);
    await deleteDoc(postDoc);
  };
  const addComment = async (id) =>{
    const postDoc = doc(db, posts, id);
    const docSnap = await getDoc(postDoc);
    let commentCount = docSnap.data().commentCount;
    if(commentCount>=7){
      alert("한 게시물에 댓글은 7개까지만 다실 수 있습니다.");
      return 0;
    }
    commentCount =  commentCount +1;
    console.log("userdisplayName:"+user.displayName);
    await updateDoc(postDoc,{comment:arrayUnion(comment),commentPeople:arrayUnion(user.displayName),commentCount:commentCount});
  };
  const commentToggles = async (id) =>{
    setCommentToggle(id);
  }
  
  

  const addLike = async (id) =>{
    if(isAuth){
      const postDoc = doc(db, posts, id);
      const docSnap = await getDoc(postDoc);
      let likeCount = 0;
      likeCount = docSnap.data().likeCount;
      var userLike = 0;
      if(likeCount>0){
        docSnap.data().like.forEach(liker=>
          {
            if(liker===user.displayName){
              userLike = 1;
            };
          }
        )
      }
      if(userLike){
        likeCount = likeCount - 1;
        await updateDoc(postDoc,{likeCount:likeCount,like:arrayRemove(auth.currentUser.displayName)});
      }
      else{
        likeCount = likeCount+1;
        await updateDoc(postDoc,{likeCount:likeCount,like:arrayUnion(auth.currentUser.displayName)});
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
              <button className="likeButton" id={post.id} onClick={()=>{if(post.author.id===auth.currentUser.uid){alert("본인 게사물에는 좋아요를 누를 수 없습니다")} else{addLike(post.id);}  }}>{!post.like.includes(user.displayName)?<img src={heart}/>:<img src={hearted}/>}{post.likeCount>=2?<h2 id="wholikeTxt"className="caption100">{post.like[0]}님 외 여러 명이 좋아합니다.</h2>:(post.likeCount==1?<h2 id="wholikeTxt"className="caption100">{post.like[0]}님 외 여러 명이 좋아했으면 좋겠습니다.</h2>:<h2 id="wholikeTxt"className="caption100">여러 명이 좋아했으면 좋겠습니다.</h2>)}</button>
              <div className="commentCount"><img src={messenger}/><h2 id="commentCountTxt"className="caption100">{post.commentCount}{}</h2></div>
            </div>
            
            {(post.commentCount<=1)?
               <>
                <hr className="breakLine"/>
                <div className="commentAndPeople">
                  <h1 className="caption150">{post.commentPeople?post.commentPeople[0]:""}</h1> <p className="postMainComment">{post.comment?post.comment[0]:""}</p>
                </div>
               </>
              :commentToggle!=post.id?(
              <div id="commentShow">
                <hr className="breakLine"/>
                <div className="commentAndPeople">
                  <p className="caption150">{post.commentPeople?post.commentPeople[0]:""}</p> <p className="postMainComment">{post.comment?post.comment[0]:""}</p>
                </div>
                <button onClick={()=>{commentToggles(post.id)}} className="commentMoreButton" id="commentMoreTxt"><h3 className="subhead100">댓글더보기 &gt;</h3></button>
              </div>)
              :
              (<div className="commentShowBox">{post.comment.map((com,index)=>{return <div id="commentShow">
                <hr className="breakLine"/>
                <div className="commentAndPeople">
                  <p className="caption150">{post.commentPeople[index]}</p> <p className="postMainComment">{com}</p>
                </div>
            </div>})}</div>)
            }
            
            <div className="inputAndButton">
            {/* onBlur={(e)=>{var input = document.getElementById(post.id+'button');input.style.display="none";var input1 = document.getElementById('commentAddInput'+post.id);input1.style.borderTopRightRadius= "8px";input1.style.borderBottomRightRadius="8px";}} */}
              <input onFocus={(e)=>{var input = document.getElementById(post.id+'button');input.value='';input.style.display="block";var input1 = document.getElementById('commentAddInput'+post.id);input1.style.borderTopRightRadius= "0px";input1.style.borderBottomRightRadius="0px";}} id={"commentAddInput"+post.id}onKeyPress={(e)=>{inputPress(e,post.id)}} className="postCommentInput" placeholder="회원님의 생각을 전달해주세요." onChange={(event)=>{setComment(event.target.value)}}/>
              <button id={post.id+'button'} style={commentButtonStyle} className="commentSendButton" onClick={()=>{addComment(post.id)}}><h3 className="subhead100">등록</h3></button> 
            </div>
            </div>
          
        );
      })}
    </div>
  );
}

export default HomeTitle;