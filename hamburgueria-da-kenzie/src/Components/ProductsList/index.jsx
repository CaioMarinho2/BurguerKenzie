import Product from "../Product";

function ProductList({
  products,
  handleClick,
  setCurrentSale,
  currentSale,
  setItensCar,
}) {
  return products.map((item) => {
    return (
      <Product
        key={item.id}
        name={item.name}
        category={item.category}
        img={item.img}
        price={item.price.toFixed(2)}
        id={item.id}
        handleClick={handleClick}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
        setItensCar={setItensCar}
      />
    );
  });
}
export default ProductList;
