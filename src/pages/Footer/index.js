import { Link } from "react-router-dom";
import linkedin from "../../img/linkedin.png"


const Footer = () =>{
    return (
        <footer class="text-center">
            <h1 className="text-center inline mr-2">By Fernando Lucas</h1>
            <Link to="https://www.linkedin.com/in/fernando-santos-08a739201/"><img className="logo-footer" src={linkedin}/></Link>
        </footer>
    )
}

export default Footer;