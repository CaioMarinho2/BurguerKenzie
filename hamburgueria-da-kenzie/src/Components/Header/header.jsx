import logo from "./images/logo.png";
import InputSearch from "../InputSearch/InputSearch";
import "./index.css"

function Header({}) {
    return(
        <header>
        <img alt="Logo " src={logo}  id="logo"/>
     <InputSearch/>
      </header>
    )
}
export default Header