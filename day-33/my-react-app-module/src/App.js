import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductFunc from "./components/productFunc";
import products from "./data/Seed";

function App() {
  const productList = products.map((product) => {
    console.log(product);
    return (
      <ProductFunc
        title={product.title}
        productImageUrl={product.productImageUrl}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        url={product.url}
        id={product.id}
        votes={product.votes}
        stars={product.stars}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products </h1>
        <hr />
        <div className="overall">
          {productList}
          <hr />
          {/* {productList2} */}
        </div>
      </header>
    </div>
  );
}

export default App;
