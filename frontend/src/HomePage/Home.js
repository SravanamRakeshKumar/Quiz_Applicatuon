// import './HomePageStyles.css';
import "../CommenComponets/HeaderComponentStyles.css";
import "./HeroComponentStyles.css";
import "./AboutComponentStyles.css";
import "./ServicesComponentStyles.css";
import "./FeedbackComponentSyles.css";
// import './all.css';
import "../CommenComponets/FooterComponentStyles.css";
import HeaderComponent from "../CommenComponets/HeaderComponent";
import FooterComponent from "../CommenComponets/FooterComponent";
import HeroComponent from './HeroComponent';
import AboutComponent from './AboutComponent';
import ServicesComponent from './ServicesComponent';
import FeedbackComponent from './FeedbackComponent';
function HomePage() {
  
  return ( 
    <>
        <HeaderComponent />
        <HeroComponent />
        <AboutComponent />
        <ServicesComponent />
        <FeedbackComponent />
        <FooterComponent />
    </>
  );
}

export default HomePage;
