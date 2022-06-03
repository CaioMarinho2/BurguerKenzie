import "./index.css"
import CartProduct from "../Cart Product/cartProduct";
function Cart({ currentSale,itensCar,setCurrentSale,setItensCar, removerItem}) {

  const valorCarrinho = currentSale.reduce((oldprice, { price }) => {
   
    return  price + oldprice
  }, 0);

  return itensCar ? (
    <aside>
      <div id="CarrTitle">
        <p>Carrinho de compras</p>
      </div>
      <div id="CarrEmptyAll">
        <h3 id="emptyCarr">Sua Sacola está Vazia</h3>
        <p id="addCarr">Adicione itens</p>
      </div>
    </aside>
  ) : (
    <aside>
      <div id="CarrTitle">
        <p>Carrinho de compras</p>
      </div>

      
      <ul id="Carr">
       {currentSale.map(({img,name,category,id},index)=>{
          return(
            <CartProduct key={index} image={img} name={name} category={category} id={id}  removerItem={ removerItem}/>
          )
       })}
      </ul>
    

      <div id="carrSubSection">
        <span id="division"></span>
        <div id="infosCarr">
          <p id="totalCarr">Total</p>
          <p id="totalNumberCarr">R$ {valorCarrinho.toFixed(2)}</p>
        </div>
        <button id="removeAllCarr" onClick={()=>{

          setCurrentSale([])
          setItensCar(true)
        }}>Remover todos</button>
      </div>

    </aside>
  );
}
export default Cart;
