import React,{useState,useEffect,useRef} from 'react';
// const imageSrc =[
//     ['../pfpimg/01background/background-default.svg'],
//     ['../pfpimg/02backlight/backlight-1.svg','../pfpimg/02backlight/backlight-2.svg','../pfpimg/02backlight/backlight-3.svg'],
//     ['../pfpimg/03planetbody/planet_body-green.svg','../pfpimg/03planetbody/planet_body-orange.svg','../pfpimg/03planetbody/planet_body-pink.svg','../pfpimg/03planetbody/planet_body-red.svg','../pfpimg/03planetbody/planet_body-sky.svg'],
//     ['../pfpimg/04planetpattern/planet_pattern-circles.svg','../pfpimg/04planetpattern/planet_pattern-crater.svg','../pfpimg/04planetpattern/planet_pattern-pockmark.svg','../pfpimg/04planetpattern/planet_pattern-stain.svg','../pfpimg/04planetpattern/planet_pattern-stripe.svg'],
//     ['../pfpimg/05planetshade/planet_shade-default.svg'],
//     ['../pfpimg/06eyes/eyes-cynic.svg','../pfpimg/06eyes/eyes-default.svg','../pfpimg/06eyes/eyes-evil.svg','../pfpimg/06eyes/eyes-frustrated.svg','../pfpimg/06eyes/eyes-love.svg','../pfpimg/06eyes/eyes-smile.svg'],
//     ['../pfpimg/07mouth/mouth-bad.svg','../pfpimg/07mouth/mouth-good.svg','../pfpimg/07mouth/mouth-normal.svg','../pfpimg/07mouth/mouth-oval.svg','../pfpimg/07mouth/mouth-very_bad.svg','../pfpimg/07mouth/mouth-very_good.svg'],
//     ['../pfpimg/08mask/mask-default.svg'],
//     ['../pfpimg/09satellite/satellite-basic_white.svg'],
//     ['../pfpimg/10ring/ring-basic.svg']
// ];
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

    const canvas = useRef(null);
     
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

    const array1 = [0,2,4,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array1[0]];
        pfpImage.onload = () => setImage(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array1[1]];
        pfpImage1.onload = () => setImage1(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array1[4]];
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
    const array2 = [0,2,4,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array2[0]];
        pfpImage.onload = () => setImage(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array2[1]];
        pfpImage1.onload = () => setImage1(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array2[4]];
        pfpImage2.onload = () => setImage2(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array2[3]];
        pfpImage3.onload = () => setImage3(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array2[4]];
        pfpImage4.onload = () => setImage4(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array2[5]];
        pfpImage5.onload = () => setImage5(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array2[6]];
        pfpImage6.onload = () => setImage6(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array2[7]];
        pfpImage7.onload = () => setImage7(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array2[8]];
        pfpImage8.onload = () => setImage8(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array2[9]];
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
          setPfp2(myCanvas.toDataURL());
        }
    },[image,image2,image3,image4,image5,image5,image6,image7,image8,image9,canvas])
    const array3 = [0,2,4,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array3[0]];
        pfpImage.onload = () => setImage(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array3[1]];
        pfpImage1.onload = () => setImage1(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array3[4]];
        pfpImage2.onload = () => setImage2(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array3[3]];
        pfpImage3.onload = () => setImage3(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array3[4]];
        pfpImage4.onload = () => setImage4(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array3[5]];
        pfpImage5.onload = () => setImage5(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array3[6]];
        pfpImage6.onload = () => setImage6(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array3[7]];
        pfpImage7.onload = () => setImage7(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array3[8]];
        pfpImage8.onload = () => setImage8(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array3[9]];
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
          setPfp3(myCanvas.toDataURL());
        }
    },[image,image2,image3,image4,image5,image5,image6,image7,image8,image9,canvas])
    const array4 = [0,2,4,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array4[0]];
        pfpImage.onload = () => setImage(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array4[1]];
        pfpImage1.onload = () => setImage1(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array4[4]];
        pfpImage2.onload = () => setImage2(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array4[3]];
        pfpImage3.onload = () => setImage3(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array4[4]];
        pfpImage4.onload = () => setImage4(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array4[5]];
        pfpImage5.onload = () => setImage5(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array4[6]];
        pfpImage6.onload = () => setImage6(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array4[7]];
        pfpImage7.onload = () => setImage7(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array4[8]];
        pfpImage8.onload = () => setImage8(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array4[9]];
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
          setPfp4(myCanvas.toDataURL());
        }
    },[image,image2,image3,image4,image5,image5,image6,image7,image8,image9,canvas])
    const array5 = [0,2,4,4,0,0,0,0,0,0];
    useEffect(() => {
        const pfpImage = new Image();
        pfpImage.src = background[array5[0]];
        pfpImage.onload = () => setImage(pfpImage);

        const pfpImage1 = new Image();
        pfpImage1.src = backlight[array5[1]];
        pfpImage1.onload = () => setImage1(pfpImage1);

        const pfpImage2 = new Image();
        pfpImage2.src = planetbody[array5[4]];
        pfpImage2.onload = () => setImage2(pfpImage2);
        
        const pfpImage3 = new Image();
        pfpImage3.src = planetpattern[array5[3]];
        pfpImage3.onload = () => setImage3(pfpImage3);
        
        const pfpImage4 = new Image();
        pfpImage4.src = planetshade[array5[4]];
        pfpImage4.onload = () => setImage4(pfpImage4);
        
        const pfpImage5 = new Image();
        pfpImage5.src = eyes[array5[5]];
        pfpImage5.onload = () => setImage5(pfpImage5);
        
        const pfpImage6 = new Image();
        pfpImage6.src = mouth[array5[6]];
        pfpImage6.onload = () => setImage6(pfpImage6);
        
        const pfpImage7 = new Image();
        pfpImage7.src = mask[array5[7]];
        pfpImage7.onload = () => setImage7(pfpImage7);
        
        const pfpImage8 = new Image();
        pfpImage8.src = satellite[array5[8]];
        pfpImage8.onload = () => setImage8(pfpImage8);
        
        const pfpImage9 = new Image();
        pfpImage9.src = ring[array5[9]];
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
          setPfp5(myCanvas.toDataURL());
        }
    },[image,image2,image3,image4,image5,image5,image6,image7,image8,image9,canvas])

    return(
        
        <div className="EmotionsBox">
            <canvas id="canvas" ref={canvas} width={360}height={360}>
                
            </canvas>
            <div className="Emotions">
                <div className="happy_emotions">
                    <img className="pfpImage" src={pfp1}> 

                    </img>
                </div>
                <div className="happy_emotions">
                    <img className="pfpImage" src={pfp2}> 

                    </img>
                </div>
                <div className="happy_emotions">
                    <img className="pfpImage" src={pfp3}> 

                    </img>
                </div>
                <div className="happy_emotions">
                    <img className="pfpImage" src={pfp4}> 

                    </img>
                </div>
                <div className="happy_emotions">
                    <img className="pfpImage" src={pfp5}> 

                    </img>
                </div>
            </div>
        </div>
    )
   
}
export default Emotions
