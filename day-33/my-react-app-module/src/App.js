import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductFunc from "./productFunc";
import products from "./Seed";
import Product from "./product";

function App() {
  const productList = products.map((product) => {
    return (
      <ProductFunc
        title={product.title}
        productImageUrl={product.productImageUrl}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        url={product.url}
        id={product.id}
        votes={product.votes}
      />
    );
  });
  const productList2 = products.map((product) => {
    return (
      <Product
        title={product.title}
        productImageUrl={product.productImageUrl}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        url={product.url}
        id={product.id}
        votes={product.votes}
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr />
        <div className="overall">
          {productList}
          <hr/>
          {productList2}
        </div>
      </header>
    </div>
  );
}

export default App;
