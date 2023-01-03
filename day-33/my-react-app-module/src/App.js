import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./product";
import Product2 from "./product2";
import Product3 from "./product3";
import Product4 from "./product4";
import ProductFunc from "./productFunc";
import ProductFunc2 from "./productFunc2";
import ProductFunc3 from "./productFunc3";
import ProductFunc4 from "./productFunc4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr />
        <div className="overall">
          <Product />
          <Product2 />
          <Product3 />
          <Product4 />
          <ProductFunc />
          {/* <ProductFunc2 />
          <ProductFunc3 />
          <ProductFunc4/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
