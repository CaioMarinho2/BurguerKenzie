import logo from "./images/logo.png";
import InputSearch from "../InputSearch/InputSearch";
import "./index.css"

function Header({setProducts,filteredProducts, setResults}) {
    return(
        <header>
        <img alt="Logo " src={logo}  id="logo"/>
     <InputSearch setProducts={setProducts} filteredProducts={filteredProducts}  setResults={ setResults}/>
      </header>
    )
}
export default Header