import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeTitle from './pages/HomeTitle'; 
import Hamburger from 'hamburger-react';
import image from './img/Vector.svg';
import Login from './pages/Login'; 
import CreatePost from './pages/CreatePost'; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import {useEffect, useState} from 'react';
import {auth} from './firebase-config';
import {signOut,setPersistence,browserSessionPersistence,onAuthStateChanged} from 'firebase/auth';

// import {auth} from "./firebase-config";
import Emotion1 from './pages/Emotion1';
import Emotion2 from './pages/Emotion2';
import Emotion3 from './pages/Emotion3';
import Emotion4 from './pages/Emotion4';
import Emotion5 from './pages/Emotion5';
import Emotions from './pages/Emotions';
import Signup from './pages/Signup';
import EmotionTotal from './pages/EmotionTotal';
import Mypage from './pages/Mypage';
import Notmobile from './pages/Notmobile';
// import {useNavigate} from 'react-router-dom';
import {BrowserView, Mobileview, isBrowser,isMobile} from 'react-device-detect';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isOpen, setOpen] = useState(false);
  const [currentPage,setCurrentPage] = useState("About 나른");
  const signUserOut = () => {
    signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.href='/emotiontotal';
    });
  }

  
  function toggleButton(){
      let toggles = document.getElementById('toggleBar');
      if(!isOpen){
          toggles.style.top="56px";  

      }
      else{
          toggles.style.top="-300px";
      }
  }
  setPersistence(auth, browserSessionPersistence).then(()=>{console.log("success")});
  const [user, setUser] = useState({});
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    if(user?.email){
      console.log(user.email);
      console.log("user:"+user.displayName);
      setIsAuth(true);
    }
    if(user?.displayName){
      console.log(user.displayName);
      
    }
  })
  return (
    <Router>
      <nav >
        {/* <BrowserView>해당기기는 지원하지 않습니다. </BrowserView> */}
        {/* onBlur={()=>{toggleButton(); console.log("onblurred");setOpen(false);}}  */}
        <div id="toggleBar">
          <Link className="toggleBarLink" to='/home'>나른 소개</Link>
          <Link className="toggleBarLink" to='/emotiontotal'>감정일기</Link>
          <Link className="toggleBarLink" to='/emotions'>나른 PFP</Link>
          <Link className="toggleBarLink" to='/mypage'>마이페이지</Link>
          {isAuth ? ( <Link className="toggleBarLink" to='/'onClick={signUserOut}>로그아웃</Link>)
          :<Link className="toggleBarLink" to='/login'>로그인</Link>}
        </div>
        <div className="home_nav">
            <button className="hamburgerButton" onClick={()=>{toggleButton()}}><Hamburger duration={0.5} size={24} toggled={isOpen} toggle={setOpen} /></button>
            <Link to='/'><div className="service_title">{currentPage}</div></Link>
            <Link className="writePostButton" to='/createpost'><img className="writePost"src={image}></img></Link>
        </div>
      </nav>
      <Routes>
        <Route path='mypage' element={<Mypage user={user}setOpen={setOpen} setCurrentPage={setCurrentPage}/>}></Route>
        <Route path="/" element={<Home setOpen={setOpen} setCurrentPage={setCurrentPage}/>}></Route>
        <Route path='/home' element={<Home setOpen={setOpen} setCurrentPage={setCurrentPage}/>}></Route>
        <Route path='/emotions' element={<Emotions setOpen={setOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth={isAuth}/>}></Route>
        <Route path="/login" element={<Login toggleButton={toggleButton}setOpen={setOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth={isAuth}/>}></Route>
        <Route path="/signup" element={<Signup setOpen={setOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth}/>}></Route>
        <Route path="/createpost" element={<CreatePost user={user}setOpen={setOpen} isAuth ={isAuth}/>}></Route>
        <Route path="/profile" element={<Profile setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotiontotal' element={<EmotionTotal user={user}setOpen={setOpen} isOpen={isOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion1' element={<Emotion1 user={user}setOpen={setOpen} isOpen={isOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion2' element={<Emotion2 user={user}setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion3' element={<Emotion3 user={user}setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion4' element={<Emotion4 user={user}setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion5' element={<Emotion5 user={user}setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/notmobile' element={<Notmobile/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
