import HeaderComponent from "../CommenComponets/HeaderComponent";
import FooterComponent from "../CommenComponets/FooterComponent";
import CoursesComponent from "./CoursesComponent";
import './CoursesPageStyles.css'
function  CoursesPage()
{
    return (
        <>
        <HeaderComponent />
        <CoursesComponent />
        <FooterComponent />
       
      </>
    );
}
 export default CoursesPage;