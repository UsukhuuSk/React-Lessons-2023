import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function ProductFunc(props) {
  console.log(props.stars)
  const [votes, setVotes] = useState(props.votes);
  const [stars, setStars] = useState(3)
  function handleUpVote(props) {
    setVotes(votes + 1);
    console.log(props.stars)

    // let newProducts = [];
    // const foundProduct = products.map((product) => {
    //   if (product.id === props.id) {
    //     product.votes = product.votes + 1;
    //   }
    //   return product;
    // });
    // console.log(foundProduct);
  }

  return (
    <div className="productno1">
      <img src={props.productImageUrl} className="App-logo" alt="logo" />
      <div className="rightside">
        <div className="upvotecount">
          <a
            href="#"
            onClick={() => {
              handleUpVote(props);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              className="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
          </a>
          <p className="count"> {votes}</p>
        </div>
        <p className="title">{props.title}</p>
        <p>{props.description}</p>
        <p className="submit">
          Submitted by:
          {
            <img
              src={props.submitterAvatarUrl}
              className="submit-pic rounded-circle"
            />
          }
        </p>
        <Rating onClick={()=> {
          console.log('clicked')
        }}
        initialValue={3}
        />
      </div>
     
    </div>
  );
}
export default ProductFunc;
