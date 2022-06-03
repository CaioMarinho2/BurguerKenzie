import "./index.css"

function Product({ name, category, img, price, id, handleClick,setCurrentSale,currentSale,setItensCar}) {
  return (
    <div className="product">
        <figure className="productBackground">
      <img alt="Imagem do Produto " src={img} className="ProductImg" />
      </figure>
      <div className="productsInfos">
        <h2 className="productName">{name}</h2>
        <p className="productCategory">{category}</p>
        <p className="productPrice">R${price}</p>
        <button className="productButton" id={id}  onClick={(event)=>{
            const itemNoCarrinho = currentSale.find((item) => {
              return item.id === +event.target.id;
          });
           if(itemNoCarrinho===undefined){

             setCurrentSale([...currentSale,...handleClick(event.target.id)])
           
             setItensCar(false)
           } else{
             alert('O Item já está no Carrinho ')
           }
          
      
        }}  >Adicionar</button>
      </div>
    </div>
  );
}
export default Product;
