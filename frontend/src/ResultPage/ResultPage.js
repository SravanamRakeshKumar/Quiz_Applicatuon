import './ResultPageStyles.css';
import {useRef } from 'react';
import { useLocation } from "react-router-dom";

function ResultPage()
{

   const oneRef = useRef(null);
   const p1Ref = useRef(null);
   const twoRef = useRef(null);
   const p2Ref = useRef(null);
   const threeRef = useRef(null);
   const p3Ref = useRef(null);
   const fourRef = useRef(null);
   const p4Ref = useRef(null);



   const location=useLocation();

   function fun(circle,score,per,color,time)
   {
     let start=0;
     let end=score* 10;
     let fun=setInterval(()=>{
      start=start+1;
     let xx=start*3.6;
     if(circle.current)
     {
     circle.current.style.background=`conic-gradient(${color} ${xx}deg,white 0)`;
     circle.current.style.transform="rotate('+xx+' deg)";
     }
     if(per.current)
     {
      per.current.innerText=start+'%';
     }
     if (start >= end) clearInterval(fun);  // Stop when it reaches the score
    },time)
   }

   fun(oneRef,10,p1Ref,"blue",10);
   location.state.correct_count !==0 && fun(twoRef,location.state.correct_count,p2Ref,"green",100);
   location.state.wrong_count !==0 && fun(threeRef,location.state.wrong_count,p3Ref,"red",100);
   location.state.skiped_count !==0 && fun(fourRef,location.state.skiped_count,p4Ref,"orange",100);
   
   return(
    <>
<div id="main">
      <h1 id="heading">Quiz result</h1>
  <div id="left">
     <h1>Score Card</h1>
    <div id="score_card">
        <div className="box">
           <h2>total</h2>
           <div className="one" ref={oneRef}>
                 <p className="pp" ref={p1Ref}>0%</p>
           </div>
           <h2>10/10</h2>
        </div>
        <div className="box">
        <h2>correct</h2>
           <div className="one" ref={twoRef}>
                 <p className="pp" ref={p2Ref}>0%</p>
           </div>
           <h2>{location.state.correct_count}/10</h2>
        </div>
        <div className="box">
        <h2>wrong</h2>
           <div className="one" ref={threeRef}>
                 <p className="pp" ref={p3Ref}>0%</p>
           </div>
           <h2>{location.state.wrong_count}/10</h2>
        </div>
        <div className="box">
            <h2>skiped</h2>
           <div className="one" ref={fourRef}>
                 <p className="pp" ref={p4Ref}>0%</p>
           </div>
           <h2>{location.state.skiped_count}/10</h2>
        </div>
          
     </div>
     <div id="options">
        <h2>Try Again</h2>
        <h2>Home</h2>
        <h2>Feed back</h2>
      </div>
  </div>
  {
      location.state.correct_count >=7 ? (
            <div id="right">
       <img style={{width:"70%",height:"80%"}} src="https://img.freepik.com/premium-vector/cute-champion-holding-championship-plaque-with-pride-vector-image_1080480-40984.jpg?w=740" alt="hjfdhjbf"></img>
       <div id="pfeedback">"Excellent work! You’ve mastered the concepts and performed brilliantly.Keep up the great work and continue to challenge yourself further!"

</div>
  </div>
      ):(
            <div id="right">
       <img style={{width:"50%",height:"70%"}} src="https://media.istockphoto.com/id/628033756/vector/cartoon-crying-boy-with-wounded-leg.jpg?s=612x612&w=0&k=20&c=RyCIPPcLBpNKFCipOwqRPo7NbPVtBCrTXigzEvv42k0=" alt="hjefvwef" />
       <div id="nfeedback">"Don’t be discouraged! Every expert was once a beginner.Focus on revisiting the basics and practice consistently to improve."</div>
  </div>
      )
  }
 
 </div>
   
   </>
   );
}
export default ResultPage;
