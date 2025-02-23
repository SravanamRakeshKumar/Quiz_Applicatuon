import img from './fbimg.png';
function FeedbackComponent()
{
    return(
        <>
        <div id="feedback">
            <h1>Give Us Your Feedback</h1>
            <div id="feedbackdiv">
                <img src={img} alt="pic" />
                <form id="feedbackform">
                    <h1>Feedback</h1>
                    <input type="text" placeholder="Enter Your Name:" required></input>
                    <textarea rows="4" cols="48" placeholder="Enter Your Feedback Message" required></textarea>
                    <div id="stars">
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        
        </div>
        </>
    )
}
export default FeedbackComponent;