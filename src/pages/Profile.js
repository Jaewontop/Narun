import React,{useState,useEffect} from "react";
import {addDoc,collection, onSnapshot} from "firebase/firestore";
import {db,auth} from '../firebase-config';
function Profile({setOpen, isAuth}){
    const [profile,setProfile] = useState([]);
    const postsCollectionRef = collection(db,'posts');
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
    useEffect(()=>{
        onSnapshot(postsCollectionRef,(snapshot)=>
            setProfile(snapshot.docs.map((doc)=>({
                authorId : doc.data().author.id,
                authorName : doc.data().author.name,
                comment : doc.data().comment,
                likeCount : doc.data().likeCount,
                postText : doc.data().postText,
                title : doc.data().title,
                docId : doc.id
            })))
        )
    },false)
    console.log(profile);
    // const borderRadius = postText.length*0.1+comment.length*0.2;
    return(
        <div className="profile">
            
        </div>
    )
}
export default Profile;