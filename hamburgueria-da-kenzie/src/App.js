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
  const [cartTotal, setCartTotal] = useState(0);
  const [itensCar, setItensCar] = useState(true);
  const [results, setResults] = useState('');

  function showProducts(params) {}
  function handleClick(productId) {}

  
  function RemoveAll() {
    setItensCar(!itensCar);
  }


  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setFilteredProducts(response);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(products);

  return (
    <>
     <Header filteredProducts={filteredProducts} setProducts={setProducts}  setResults={ setResults}/>
          {results}
      <main>
        <section id="ProductsSection">
        <ProductList products={products} handleClick={handleClick} />
        </section>
        <Cart currentSale={currentSale} itensCar={itensCar}  />
      </main>
    </>
  );
}

export default App;
