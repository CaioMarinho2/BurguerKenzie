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
      <div>
        <div>
          <p>Total</p>
          <p>R$ 40,00</p>
        </div>
        <button>Remover todos</button>
      </div>

    </aside>
  );
}
export default Cart;
