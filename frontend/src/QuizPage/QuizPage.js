import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import './QuizPageStyles.css';
import { useLocation } from "react-router-dom";
function  QuizPage()
{
    const [data,setData]=useState(null);
    const [currect,setCurrect]=useState(0);
    const [wrong,setWrong]=useState(0);
    const location=useLocation();
    const [count,setCount]=useState(1);
    const [selectedOption, setSelectedOption] = useState(false); 
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(()=>
    {
       fetch(`${API_URL}questions/${location.state.subject}/${count}`)
       .then(res =>res.json())
       .then(result=>{
        setData(result);
        setSelectedOption(false);
       })
       .catch(err => console.log("error is:",err))
        },[count])

        const handleCheckboxChange = (index,ans) => {
            setSelectedOption(index);
           {ans == index ? (setCurrect(currect+1) ): (setWrong(wrong+1)) }
        };
         function confermation()
         {
            if(window.confirm("are you sure to submit the quiz?"))
            {
                document.getElementById("page").style.filter="brightness(0.1)";
                document.getElementById("submition-box").style.visibility="visible";
                document.getElementById("submition-box").style.animation="popup 1s 1 forwards";
                document.getElementById("tick").style.animation="effect 1s 1 forwards";
                document.getElementById("tick").style.animationDelay="0.5s";
            }
            else{
                console.log("not ok");
            }
         }
     
        return (
            <>
            <div id="imgdull"></div>
            <div id="submition-box">
                <div id="message">
                  <img id="tick" src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemdefault_103756.png" alt="fbfbjbe" />
                   <h2>Quiz Submitted Successfull</h2>
                </div> 
                <Link to="/Result" state={{correct_count:currect,wrong_count:wrong,skiped_count:10-(currect+wrong)}}><button id="submit" >Check Your Result</button></Link>
            </div>
            <div id="page">
                <div id="title">{location.state.subject} Quiz</div>
            {data ? (
                <div id="quesition">
            <h1>{data.id}.{data.quesition}</h1>
            <ol>
                {
                    data.options.map((op,index)=>
                    (
                      <li key={index}>
                        <input
                            type="radio"

                            id={index}
                            checked={selectedOption === index} 
                            onChange={() => handleCheckboxChange(index,data.answer)}
                         />
                         {op}
                        
                    </li>
                    ))
                }
            </ol>
            <div id="buttons">
            <button onClick={()=>setCount(count-1)} disabled={count === 1}>Previos</button>
            <button onClick={()=>setCount(count+1)} disabled={count === 10}>Next</button>
            </div>
            <button id="submit" onClick={confermation}>SUBMIT</button>
            </div>
            ):(<h1>Loading..</h1>)
        }
            </div> 
            </> 
        );
}
 export default QuizPage;