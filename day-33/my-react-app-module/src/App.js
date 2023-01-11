import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductFunc from "./components/productFunc";
import products from "./data/Seed";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState(products);
  function handleProductUpVote(productId) {
    // console.log("upvoted", productId);
    // const foundProduct = products.filter((product) => {
    //   if (product.id == productId) {
    //     return product;
    //   }
    // });
    // console.log(foundProduct[0].votes);
    // foundProduct[0].votes = productId[0].votes + 1;
    // console.log(foundProduct[0].votes);

    // console.log(products);
    const newProducts = productList.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    // console.log(newProducts);
    setProductList(newProducts);
  }
  const productComponents = productList.map((product) => {
    // console.log(product);
    return (
      <ProductFunc
        title={product.title}
        productImageUrl={product.productImageUrl}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        url={product.url}
        id={product.id}
        votes={product.votes}
        onVote={handleProductUpVote}
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
          {productComponents}d
          <hr />
          {/* {productList2} */}
        </div>
      </header>
    </div>
  );
}

export default App;
