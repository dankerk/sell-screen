import './App.scss';
import Header from './components/Header/Header.component';
import ProductList from './components/ProductList/ProductList.component';
import Cart from './components/Cart/Cart.component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="products">
          <h1>Products</h1>
          <ProductList></ProductList>
        </div>
        <div className="cart">
          <Cart></Cart>
        </div>
        
      </div>
    </div>
  );
}

export default App;
