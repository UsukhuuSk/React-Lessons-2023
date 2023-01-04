import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductFunc from "./productFunc";
import products from "./Seed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr />
        <div className="overall">
          {products.map((product) => {
    
            return <ProductFunc 
            title={product.title}
            productImageUrl={product.productImageUrl}
            description={product.description}
            submitterAvatarUrl={product.submitterAvatarUrl}
            url={product.url}
            id={product.id}
            votes={product.votes}
            />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;