import "./index.css"

function Product({ name, category, img, price, id, handleClick }) {
  return (
    <div id="product">
        <figure>
      <img alt="Imagem do Produto " src={img} />
      </figure>
      <div>
        <h2 id="productName">{name}</h2>
        <p id="productCategory">{category}</p>
        <p id="productPrice">R${price}</p>
        <button id="productButton">Adicionar</button>
      </div>
    </div>
  );
}
export default Product;
