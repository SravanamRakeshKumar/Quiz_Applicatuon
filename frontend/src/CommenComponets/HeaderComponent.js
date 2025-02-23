import { Link } from "react-router-dom"
function HeaderComponent()
{
    return(
        <>
         <header>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4U8sIoS4O5neMNO6HfMhw4PA5ILaC_QtfFA&s" alt="logo" />
              <div id="icons">
                <Link to="/"><button>home</button></Link>
                <Link to="/about"><button>about</button></Link>
                <Link to="/courses"><button>courses</button></Link>
                <Link to="/contact"><button>contact</button></Link>
              </div>
            </header>
        </>
    )
}
export default HeaderComponent;