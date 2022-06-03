import "./index.css"
function Cart({ currentSale,itensCar }) {
  

  return itensCar ? (
    <aside>
      <div id="CarrTitle">
        <p>Carrinho de compras</p>
      </div>
      <div id="Carr">
        <h3 id="emptyCarr">Sua Sacola está Vazia</h3>
        <p id="addCarr">Adicione itens</p>
      </div>
    </aside>
  ) : (
    <aside>
      <div id="CarrTitle">
        <p>Carrinho de compras</p>
      </div>
      <div id="Carr">

      </div>
      <div id="carrSubSection">
        <span id="division"></span>
        <div id="infosCarr">
          <p id="totalCarr">Total</p>
          <p id="totalNumberCarr">R$ 40,00</p>
        </div>
        <button id="removeAllCarr">Remover todos</button>
      </div>

    </aside>
  );
}
export default Cart;
