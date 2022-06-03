import "./index.css";

import { useState } from "react";

function InputSearch({setProducts,filteredProducts, setResults}) {
  const [filter, setFilter] = useState('');
 
function filtrar() {
  const filtrado = filteredProducts.filter((produto) => {
    return  produto.category.toLowerCase().replace('s','').replace('í','i') === filter.toLowerCase().replace('s','').replace('í','i')|| produto.name.toLowerCase().replace('á','a').replace('s','') === filter.toLowerCase().replace('á','a').replace('s','')
  });

setProducts(filtrado)
}
  return (
    <form
      id="searchBar"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(filter)


        
        setResults(<p id="resultsFor"> Resultados para: <p id="productSeacher"> {filter} </p> </p>)
        filtrar()
      }}
    >
      <input type="text" id="search" placeholder="Digitar Pesquisa" onChange={(event) =>{
               console.log(event.target.value) 
               setFilter(event.target.value) }}></input>

      <button type="submit" id="searchButton"
      
      >
        Pesquisar
      </button>
    </form>
  );
}
export default InputSearch;
