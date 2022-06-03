import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";
import ProductList from "./Components/ProductsList";
import Cart from "./Components/Cart";
import Header from "./Components/Header/header";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [itensCar, setItensCar] = useState(true);
  const [results, setResults] = useState("");

  
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setFilteredProducts(response);
      })
      .catch((err) => console.log(err));
  }, []);
  /*   console.log(products); */

  console.log(currentSale);

  function handleClick(productId) {
    const addProductCar = products.filter(({ id }) => id === +productId);

    return addProductCar;
  }
 
  function removerItem(id) {
    const remove = currentSale.filter((item) => {
      return item.id !== +id;
    });
   
    setCurrentSale([...remove]);
    if(remove.length===0){
      setItensCar(true)
    }
  }
  return (
    <>
      <Header
        filteredProducts={filteredProducts}
        setProducts={setProducts}
        setResults={setResults}
      />
      {results}
      <main>
        <section id="ProductsSection">
          <ProductList
            products={products}
            handleClick={handleClick}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            setItensCar={setItensCar}
          />
        </section>
        <Cart
          currentSale={currentSale}
          itensCar={itensCar}
          setCurrentSale={setCurrentSale}
          setItensCar={setItensCar}
          removerItem={ removerItem}
        />
      </main>
    </>
  );
}

export default App;
