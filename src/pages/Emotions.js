import React,{useState,useEffect,useRef} from 'react';

import backgroundPFP from '../pfpimg/01background/background-default.svg';
import backlightPFP from '../pfpimg/02backlight/backlight-1.svg';import backlightPFP2 from '../pfpimg/02backlight/backlight-2.svg';import backlightPFP3 from '../pfpimg/02backlight/backlight-3.svg';
import planetbodyPFP from '../pfpimg/03planetbody/planet_body-green.svg';import planetbodyPFP2 from '../pfpimg/03planetbody/planet_body-orange.svg';import planetbodyPFP3 from '../pfpimg/03planetbody/planet_body-pink.svg';import planetbodyPFP4 from '../pfpimg/03planetbody/planet_body-red.svg';import planetbodyPFP5 from '../pfpimg/03planetbody/planet_body-sky.svg';
import planetpatternPFP from '../pfpimg/04planetpattern/planet_pattern-circles.svg';import planetpatternPFP2 from '../pfpimg/04planetpattern/planet_pattern-crater.svg';import planetpatternPFP3 from '../pfpimg/04planetpattern/planet_pattern-pockmark.svg';import planetpatternPFP4 from '../pfpimg/04planetpattern/planet_pattern-stain.svg';import planetpatternPFP5 from '../pfpimg/04planetpattern/planet_pattern-stripe.svg';
import planetshadePFP from '../pfpimg/05planetshade/planet_shade-default.svg';
import eyesPFP from '../pfpimg/06eyes/eyes-cynic.svg';import eyesPFP2 from '../pfpimg/06eyes/eyes-default.svg';import eyesPFP3 from '../pfpimg/06eyes/eyes-evil.svg';import eyesPFP4 from '../pfpimg/06eyes/eyes-frustrated.svg';import eyesPFP5 from '../pfpimg/06eyes/eyes-love.svg';import eyesPFP6 from '../pfpimg/06eyes/eyes-smile.svg';
import mouthPFP from '../pfpimg/07mouth/mouth-bad.svg';import mouthPFP2 from '../pfpimg/07mouth/mouth-good.svg';import mouthPFP3 from '../pfpimg/07mouth/mouth-normal.svg';import mouthPFP4 from '../pfpimg/07mouth/mouth-oval.svg';import mouthPFP5 from '../pfpimg/07mouth/mouth-very_bad.svg';import mouthPFP6 from '../pfpimg/07mouth/mouth-very_good.svg';
import maskPFP from '../pfpimg/08mask/mask-default.svg';
import satellitePFP from '../pfpimg/09satellite/satellite-basic_white.svg';
import ringPFP from '../pfpimg/10ring/ring-basic.svg';

function Emotions({setOpen,setCurrentPage,setIsAuth,isAuth}){
    useEffect(()=>{setOpen(false);let toggles = document.getElementById('toggleBar');toggles.style.top="-300px";
     },false);
   setCurrentPage("나른 PFP");
//    console.log(isAuth);
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);
    const [image7, setImage7] = useState(null);
    const [image8, setImage8] = useState(null);
    const [image9, setImage9] = useState(null);

    const [image10, setImage10] = useState(null);
    const [image11, setImage11] = useState(null);
    const [image12, setImage12] = useState(null);
    const [image13, setImage13] = useState(null);
    const [image14, setImage14] = useState(null);
    const [image15, setImage15] = useState(null);
    const [image16, setImage16] = useState(null);
    const [image17, setImage17] = useState(null);
    const [image18, setImage18] = useState(null);
    const [image19, setImage19] = useState(null);

    const [image20, setImage20] = useState(null);
    const [image21, setImage21] = useState(null);
    const [image22, setImage22] = useState(null);
    const [image23, setImage23] = useState(null);
    const [image24, setImage24] = useState(null);
    const [image25, setImage25] = useState(null);
    const [image26, setImage26] = useState(null);
    const [image27, setImage27] = useState(null);
    const [image28, setImage28] = useState(null);
    const [image29, setImage29] = useState(null);

    const [image30, setImage30] = useState(null);
    const [image31, setImage31] = useState(null);
    const [image32, setImage32] = useState(null);
    const [image33, setImage33] = useState(null);
    const [image34, setImage34] = useState(null);
    const [image35, setImage35] = useState(null);
    const [image36, setImage36] = useState(null);
    const [image37, setImage37] = useState(null);
    const [image38, setImage38] = useState(null);
    const [image39, setImage39] = useState(null);

    const [image40, setImage40] = useState(null);
    const [image41, setImage41] = useState(null);
    const [image42, setImage42] = useState(null);
    const [image43, setImage43] = useState(null);
    const [image44, setImage44] = useState(null);
    const [image45, setImage45] = useState(null);
    const [image46, setImage46] = useState(null);
    const [image47, setImage47] = useState(null);
    const [image48, setImage48] = useState(null);
    const [image49, setImage49] = useState(null);

    const canvas = useRef(null);
    const canvas2 = useRef(null);
    const canvas3 = useRef(null);
    const canvas4 = useRef(null);
    const canvas5 = useRef(null);
     
    const background = [backgroundPFP];
    const backlight = [backlightPFP,backlightPFP2,backlightPFP3];
    const planetbody = [planetbodyPFP,planetbodyPFP2,planetbodyPFP3,planetbodyPFP4,planetbodyPFP5];
    const planetpattern = [planetpatternPFP,planetpatternPFP2,planetpatternPFP3,planetpatternPFP4,planetpatternPFP5];
    const planetshade = [planetshadePFP];
    const eyes = [eyesPFP,eyesPFP2,eyesPFP3,eyesPFP4,eyesPFP5,eyesPFP6];
    const mouth = [mouthPFP,mouthPFP2,mouthPFP3,mouthPFP4,mouthPFP5,mouthPFP6];
    const mask = [maskPFP];
    const satellite = [satellitePFP];
    const ring = [ringPFP];

    const [pfp1,setPfp1] = useState("");
    const [pfp2,setPfp2] = useState("");
    const [pfp3,setPfp3] = useState("");
    const [pfp4,setPfp4] = useState("");
    const [pfp5,setPfp5] = useState("");

    const array1 = [0,2,0,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array1[0]];
        pfpImage.onload = () => setImage(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array1[1]];
        pfpImage1.onload = () => setImage1(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array1[2]];
        pfpImage2.onload = () => setImage2(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array1[3]];
        pfpImage3.onload = () => setImage3(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array1[4]];
        pfpImage4.onload = () => setImage4(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array1[5]];
        pfpImage5.onload = () => setImage5(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array1[6]];
        pfpImage6.onload = () => setImage6(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array1[7]];
        pfpImage7.onload = () => setImage7(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array1[8]];
        pfpImage8.onload = () => setImage8(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array1[9]];
        pfpImage9.onload = () => setImage9(pfpImage9);
    }, [])
    useEffect(() => {
        if(image && image1 && image2 && image3 && image4 && image5 && image6 && image7 && image8 && image9 && canvas) {
          const ctx = canvas.current.getContext("2d")
          ctx.fillStyle = "black"
          ctx.fillRect(0, 0, 360, 360)
          ctx.drawImage(image, 0,0, 360,360)
          ctx.drawImage(image1, 0,0, 360,360)
          ctx.drawImage(image2, 0,0, 360,360)
          ctx.drawImage(image3, 0,0, 360,360)
          ctx.drawImage(image4, 0,0, 360,360)
          ctx.drawImage(image5, 0,0, 360,360)
          ctx.drawImage(image6, 0,0, 360,360)
          ctx.drawImage(image7, 0,0, 360,360)
          ctx.drawImage(image8, 0,0, 360,360)
          ctx.drawImage(image9, 0,0, 360,360)
          const myCanvas = document.querySelector("#canvas");
          setPfp1(myCanvas.toDataURL());
        }
    },[image,image2,image3,image4,image5,image5,image6,image7,image8,image9,canvas])
    const array2 = [0,2,1,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array2[0]];
        pfpImage.onload = () => setImage10(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array2[1]];
        pfpImage1.onload = () => setImage11(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array2[2]];
        pfpImage2.onload = () => setImage12(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array2[3]];
        pfpImage3.onload = () => setImage13(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array2[4]];
        pfpImage4.onload = () => setImage14(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array2[5]];
        pfpImage5.onload = () => setImage15(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array2[6]];
        pfpImage6.onload = () => setImage16(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array2[7]];
        pfpImage7.onload = () => setImage17(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array2[8]];
        pfpImage8.onload = () => setImage18(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array2[9]];
        pfpImage9.onload = () => setImage19(pfpImage9);
    }, [])
    useEffect(() => {
        if(image10 && image11 && image12 && image13 && image14 && image15 && image16 && image17 && image18 && image19 && canvas2) {
          const ctx = canvas2.current.getContext("2d")
          ctx.fillStyle = "black"
          ctx.fillRect(0, 0, 360, 360)
          ctx.drawImage(image10, 0,0, 360,360)
          ctx.drawImage(image11, 0,0, 360,360)
          ctx.drawImage(image12, 0,0, 360,360)
          ctx.drawImage(image13, 0,0, 360,360)
          ctx.drawImage(image14, 0,0, 360,360)
          ctx.drawImage(image15, 0,0, 360,360)
          ctx.drawImage(image16, 0,0, 360,360)
          ctx.drawImage(image17, 0,0, 360,360)
          ctx.drawImage(image18, 0,0, 360,360)
          ctx.drawImage(image19, 0,0, 360,360)
          const myCanvas = document.querySelector("#canvas2");
          setPfp2(myCanvas.toDataURL());
        }
    },[image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,canvas2])
    const array3 = [0,2,2,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array3[0]];
        pfpImage.onload = () => setImage20(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array3[1]];
        pfpImage1.onload = () => setImage21(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array3[2]];
        pfpImage2.onload = () => setImage22(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array3[3]];
        pfpImage3.onload = () => setImage23(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array3[4]];
        pfpImage4.onload = () => setImage24(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array3[5]];
        pfpImage5.onload = () => setImage25(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array3[6]];
        pfpImage6.onload = () => setImage26(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array3[7]];
        pfpImage7.onload = () => setImage27(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array3[8]];
        pfpImage8.onload = () => setImage28(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array3[9]];
        pfpImage9.onload = () => setImage29(pfpImage9);
    }, [])
    useEffect(() => {
        if(image20 && image21 && image22 && image23 && image24 && image25 && image26 && image27 && image28 && image29 && canvas3) {
          const ctx = canvas3.current.getContext("2d")
          ctx.fillStyle = "black"
          ctx.fillRect(0, 0, 360, 360)
          ctx.drawImage(image20, 0,0, 360,360)
          ctx.drawImage(image21, 0,0, 360,360)
          ctx.drawImage(image22, 0,0, 360,360)
          ctx.drawImage(image23, 0,0, 360,360)
          ctx.drawImage(image24, 0,0, 360,360)
          ctx.drawImage(image25, 0,0, 360,360)
          ctx.drawImage(image26, 0,0, 360,360)
          ctx.drawImage(image27, 0,0, 360,360)
          ctx.drawImage(image28, 0,0, 360,360)
          ctx.drawImage(image29, 0,0, 360,360)
          const myCanvas = document.querySelector("#canvas3");
          setPfp3(myCanvas.toDataURL());
        }
    },[image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,canvas3])
    const array4 = [0,2,3,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array4[0]];
        pfpImage.onload = () => setImage30(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array4[1]];
        pfpImage1.onload = () => setImage31(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array4[2]];
        pfpImage2.onload = () => setImage32(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array4[3]];
        pfpImage3.onload = () => setImage33(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array4[4]];
        pfpImage4.onload = () => setImage34(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array4[5]];
        pfpImage5.onload = () => setImage35(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array4[6]];
        pfpImage6.onload = () => setImage36(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array4[7]];
        pfpImage7.onload = () => setImage37(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array4[8]];
        pfpImage8.onload = () => setImage38(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array4[9]];
        pfpImage9.onload = () => setImage39(pfpImage9);
    }, [])
    useEffect(() => {
        if(image30 && image31 && image32 && image33 && image34 && image35 && image36 && image37 && image38 && image39 && canvas4) {
          const ctx = canvas4.current.getContext("2d")
          ctx.fillStyle = "black"
          ctx.fillRect(0, 0, 360, 360)
          ctx.drawImage(image30, 0,0, 360,360)
          ctx.drawImage(image31, 0,0, 360,360)
          ctx.drawImage(image32, 0,0, 360,360)
          ctx.drawImage(image33, 0,0, 360,360)
          ctx.drawImage(image34, 0,0, 360,360)
          ctx.drawImage(image35, 0,0, 360,360)
          ctx.drawImage(image36, 0,0, 360,360)
          ctx.drawImage(image37, 0,0, 360,360)
          ctx.drawImage(image38, 0,0, 360,360)
          ctx.drawImage(image39, 0,0, 360,360)
          const myCanvas = document.querySelector("#canvas4");
          setPfp4(myCanvas.toDataURL());
        }
    },[image30,image31,image32,image33,image34,image35,image36,image37,image38,image39,canvas4])
    const array5 = [0,2,4,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array5[0]];
        pfpImage.onload = () => setImage40(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array5[1]];
        pfpImage1.onload = () => setImage41(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array5[2]];
        pfpImage2.onload = () => setImage42(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array5[3]];
        pfpImage3.onload = () => setImage43(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array5[4]];
        pfpImage4.onload = () => setImage44(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array5[5]];
        pfpImage5.onload = () => setImage45(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array5[6]];
        pfpImage6.onload = () => setImage46(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array5[7]];
        pfpImage7.onload = () => setImage47(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array5[8]];
        pfpImage8.onload = () => setImage48(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array5[9]];
        pfpImage9.onload = () => setImage49(pfpImage9);
    }, [])
    useEffect(() => {
        if(image40 && image41 && image42 && image43 && image44 && image45 && image46 && image47 && image48 && image49 && canvas5) {
          const ctx = canvas5.current.getContext("2d")
          ctx.fillStyle = "black"
          ctx.fillRect(0, 0, 360, 360)
          ctx.drawImage(image40, 0,0, 360,360)
          ctx.drawImage(image41, 0,0, 360,360)
          ctx.drawImage(image42, 0,0, 360,360)
          ctx.drawImage(image43, 0,0, 360,360)
          ctx.drawImage(image44, 0,0, 360,360)
          ctx.drawImage(image45, 0,0, 360,360)
          ctx.drawImage(image46, 0,0, 360,360)
          ctx.drawImage(image47, 0,0, 360,360)
          ctx.drawImage(image48, 0,0, 360,360)
          ctx.drawImage(image49, 0,0, 360,360)
          const myCanvas = document.querySelector("#canvas5");
          setPfp5(myCanvas.toDataURL());
        }
    },[image40,image41,image42,image43,image44,image45,image46,image47,image48,image49,canvas5])
    console.log("pfp1:"+pfp1);
    console.log("pfp2:"+pfp2);
    console.log("pfp3:"+pfp3);
    console.log("pfp4:"+pfp4);
    console.log("pfp5:"+pfp5);
    const [toggle, setToggle] = useState('none');
   
    // useEffect(()=>{
    //     if(document.getElementById('popOver')){
    //         if(toggle=='none'){
    //             document.getElementById('popOver').style.display="none";
    //         }
    //         else{
    //             document.getElementById('popOver').style.display="flex";
    //         }
    //     }
        
    // },[toggle])
    
    return(
        
        <div className="EmotionsBox">
            <canvas id="canvas" ref={canvas} width={360}height={360}/>
            <canvas id="canvas2" ref={canvas2} width={360}height={360}/>
            <canvas id="canvas3" ref={canvas3} width={360}height={360}/>
            <canvas id="canvas4" ref={canvas4} width={360}height={360}/>
            <canvas id="canvas5" ref={canvas5} width={360}height={360}/>
            <div className="emotionsIntro">
                <h2 className="body150">나른 스페이스 행성계의 행성들은 감정이 풍부하고,<br/>공감 능력이 뛰어난 친구들입니다.</h2>    
                <h2 className="body150">모두가 멀리 떨어져있지만,<br/>같은 행성계에서 살아간다는 공통점이 있죠. </h2> 
                <h2 className="body150"> 그 공통점 때문인지, 사람들의 감정에 공감하면서<br/>다양한 형태로 모습이 바뀌게 됩니다.</h2> 
            </div>    
            
            <div className="Emotions">
                {/* <div tabindex="0" id='popOver' onBlur={()=>{setToggle('none');console.log("blur success");}}className="popover">
                    <div><h1 className="point100">{toggle}</h1></div>
                    {toggle=='기쁨'?<img src={pfp1}/>:<></>}
                    {toggle=='분노'?<img src={pfp2}/>:<></>}
                    {toggle=='슬픔'?<img src={pfp3}/>:<></>}
                    {toggle=='사랑'?<img src={pfp4}/>:<></>}
                    {toggle=='걱정'?<img src={pfp5}/>:<></>}
                    <div><h3 className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같아요.<br/>축제를 열 생각인지 ‘기쁨' 행성이 훌라후프를 돌고 있네요.</h3></div>
                </div> */}
                <div onClick={()=>{setToggle('기쁨');}}className="happy_emotions">
                    <img className="pfpImage" src={pfp1}/> 
                    <div className="happy_emotions_txtBox">
                        {/* <h3 className="subhead100">기쁨</h3> */}
                        <div className="subhead100">기쁨</div>
                        <div className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같아요. 축제를 열 생각인지 ‘기쁨' 행성이 훌라후프를 돌고 있네요.</div>
                        {/* <h3 className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같<br/>아요. 축제를 열 생각인지 ‘기쁨' 행성이 훌라후<br/>프를 돌고 있네요.</h3> */}
                    </div>
                    
                </div>
                <div onClick={()=>{setToggle('분노');}}className="happy_emotions">
                    <img className="pfpImage" src={pfp2}/> 
                    <div className="happy_emotions_txtBox">
                        {/* <h3 className="subhead100">기쁨</h3> */}
                        <div className="subhead100">분노</div>
                        <div className="body150">모든 스트레스는 인간관계때문에 나온다고 해요. 그래서 그런지 ‘분노' 행성의 위성이 갑자기 늘어난 것 같아요.</div>
                        {/* <h3 className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같<br/>아요. 축제를 열 생각인지 ‘기쁨' 행성이 훌라후<br/>프를 돌고 있네요.</h3> */}
                    </div>
                    
                </div>
                <div onClick={()=>{setToggle('슬픔');}}className="happy_emotions">
                    <img className="pfpImage" src={pfp3}/> 
                    <div className="happy_emotions_txtBox">
                        {/* <h3 className="subhead100">기쁨</h3> */}
                        <div className="subhead100">슬픔</div>
                        <div className="body150">사람들이 많이 우울한 것 같아요. 그래서 그런지 ‘슬픔' 행성의 표정이 점점 어두워졌답니다.</div>
                        {/* <h3 className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같<br/>아요. 축제를 열 생각인지 ‘기쁨' 행성이 훌라후<br/>프를 돌고 있네요.</h3> */}
                    </div>
                    
                </div>
                <div onClick={()=>{setToggle('사랑');}}className="happy_emotions">
                    <img className="pfpImage" src={pfp4}/> 
                    <div className="happy_emotions_txtBox">
                        {/* <h3 className="subhead100">기쁨</h3> */}
                        <div className="subhead100">사랑</div>
                        <div className="body150">최근 사람들의 사랑이 점점 깊어지는 것 같아요. 그래서인지 ‘사랑' 행성은 부끄러웠는지 얼굴에 반점들이 많이 생겼어요.</div>
                        {/* <h3 className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같<br/>아요. 축제를 열 생각인지 ‘기쁨' 행성이 훌라후<br/>프를 돌고 있네요.</h3> */}
                    </div>
                    
                </div>
                <div onClick={()=>{setToggle('걱정');}}className="happy_emotions">
                    <img className="pfpImage" src={pfp5}/> 
                    <div className="happy_emotions_txtBox">
                        {/* <h3 className="subhead100">기쁨</h3> */}
                        <div className="subhead100">걱정</div>
                        <div className="body150">‘걱정' 행성의 색이 더욱 짙어진 걸 보니 사람들이 품고 있는 근심 걱정들이 많아진 것 같아요.</div>
                        {/* <h3 className="body150">기뻐하는 사람들이 많은 건 정말 큰 축복인 것 같<br/>아요. 축제를 열 생각인지 ‘기쁨' 행성이 훌라후<br/>프를 돌고 있네요.</h3> */}
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
   
}
export default Emotions
