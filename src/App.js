import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeTitle from './pages/HomeTitle'; 
import Hamburger from 'hamburger-react';
import image from './img/Vector.svg';
import Login from './pages/Login'; 
import CreatePost from './pages/CreatePost'; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import {useState} from 'react';
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

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isOpen, setOpen] = useState(false);
  const [currentPage,setCurrentPage] = useState("About 나른");
  const signUserOut = () => {
    signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/";
    });
  }
  function toggleButton(){
      let toggles = document.getElementById('toggleBar');
      if(!isOpen){
          toggles.style.top="80px";  

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
      setIsAuth(true);
    }
  })
  return (
    <Router>
      <nav>
        <div className="home_nav">
            <button className="hamburgerButton" onClick={()=>{toggleButton()}}><Hamburger duration={0.7} size={24} toggled={isOpen} toggle={setOpen} /></button>
            <div id="toggleBar">
                <Link className="toggleBarLink" to='/emotion1'>감정일기</Link>
                <Link className="toggleBarLink" to='/emotions'>나른 PFP</Link>
                {isAuth ? ( <Link className="toggleBarLink" to='/'onClick={signUserOut}>logOut</Link>)
                :<Link className="toggleBarLink" to='/login'>로그인</Link>}
            </div>
            <Link to='/'><div className="service_title">{currentPage}</div></Link>
            <Link className="writePostButton" to='/emotion1/post1'><img className="writePost"src={image}></img></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home setOpen={setOpen} setCurrentPage={setCurrentPage}/>}></Route>
        <Route path='/home' element={<Home setOpen={setOpen} setCurrentPage={setCurrentPage}/>}></Route>
        <Route path='/emotions' element={<Emotions setOpen={setOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth={isAuth}/>}></Route>
        <Route path="/login" element={<Login setOpen={setOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth={isAuth}/>}></Route>
        <Route path="/signup" element={<Signup setOpen={setOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth}/>}></Route>
        <Route path="/createpost" element={<CreatePost setOpen={setOpen} isAuth ={isAuth}/>}></Route>
        <Route path="/profile" element={<Profile setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion1' element={<Emotion1 setOpen={setOpen} isOpen={isOpen} setCurrentPage={setCurrentPage} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion2' element={<Emotion2 setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion3' element={<Emotion3 setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion4' element={<Emotion4 setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
        <Route path='/emotion5' element={<Emotion5 setOpen={setOpen} setIsAuth={setIsAuth} isAuth ={isAuth}/>}></Route>
  
        <Route path='/emotion1/post1' element={<CreatePost setOpen={setOpen} setCurrentPage={setCurrentPage} isAuth={isAuth} posts={"post1"}/>}></Route>
        <Route path='/emotion2/post2' element={<CreatePost setOpen={setOpen} isAuth={isAuth} posts={"post2"}/>}></Route>
        <Route path='/emotion3/post3' element={<CreatePost setOpen={setOpen} isAuth={isAuth} posts={"post3"}/>}></Route>
        <Route path='/emotion4/post4' element={<CreatePost setOpen={setOpen} isAuth={isAuth} posts={"post4"}/>}></Route>
        <Route path='/emotion5/post5' element={<CreatePost setOpen={setOpen} isAuth={isAuth} posts={"post5"}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
