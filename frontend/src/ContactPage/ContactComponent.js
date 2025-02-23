function ContactComponent()
{
    function submit()
    {
 
     alert("message send successfully")
    }
    return(
        <>
       <div id="contact">
      <img src="https://th.bing.com/th/id/OIP.5_2b8GQx3_6TW0BAE5XKjQHaJJ?rs=1&pid=ImgDetMain" alt="bd"></img>
      <form action="/" onSubmit={submit}>
        <h1>Contact Us</h1>
        <input type="text" placeholder="Enter Your Name:" required></input>
        <input type="email" placeholder="Enter a Valid Email address:" required></input>
        <textarea rows="4" cols="48" placeholder="Enter Your Message" required></textarea>
        <button type="submit" >Submit</button>
      </form>
    </div>
        
    </>
    );
}
export default ContactComponent;