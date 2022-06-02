import "./index.css"

function InputSearch() {
    return(
       <form id="searchBar" onSubmit={(event) => {
        event.preventDefault();
      }}>
     <input type="text" id="search" placeholder="Digitar Pesquisa">
     </input>

     <button type="submit" id="searchButton">
         Pesquisar 
     </button>
       </form>
    )
}
export default InputSearch