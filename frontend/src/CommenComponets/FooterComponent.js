import React from 'react';
import {FaYoutube,FaGoogle,FaWhatsapp,FaInstagram,FaFacebook} from 'react-icons/fa';
function FooterComponent()
{
    return (
        <div id="footer">
            <div id="icons-div">
                <FaYoutube  className='icon youtube'/>
                <FaWhatsapp className='icon whatsap'/>
                 <FaGoogle className='icon google'/>
                <FaInstagram className='icon instagram'/>
                <FaFacebook className='icon facebook'/>
            </div>
            <div id="sections-div">
                <button>Home</button>
                <button>About</button>
                <button>Courses</button>
                <button>Contact</button>
            </div>
            <p>Copyright @2025;Designed by Rakesh</p>

        </div>
    );

}
export default FooterComponent;