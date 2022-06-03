import "./index.css";
function CartProduct({ image, name, category,id, removerItem }) {
  return (
    <li className="carrProduct">
      <div className="carrProductsInfo">
        <figure className="backgroungImageProductCarr">
          <img
            alt="Imagem do produto no carrinho"
            src={image}
            className="imageProductCarr"
          />
        </figure>
        <div className="carrProductsNameAndCategory">
          <h4 className="productNameCarr">{name}</h4>
          <p className="productCategoryCarr">{category}</p>
        </div>
      </div>
      <button className="removeButtonCarr" id={id}  onClick={(event)=>{
          console.log(event.target.id)
                removerItem(event.target.id)
      }}  >Remover</button>
    </li>
  );
}
export default CartProduct;
