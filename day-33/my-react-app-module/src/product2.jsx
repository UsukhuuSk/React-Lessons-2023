import React from "react";
class Product2 extends React.Component {
  render() {
    return (
        <div className="productno2">
        <img src="images/aqua.png" className="App-logo" alt="logo" />
        <div className="rightside">
          <div className="upvotecount">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              class="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <p className="count">44</p>
          </div>
          <p className="title">Yellow Pail</p>
          <p>On-demand sand castle construction expertise.</p>
          <p className="submit">
            Submitted by:
            {
              <img
                src="images/elliot.jpg"
                className="submit-pic rounded-circle"
              />
            }
          </p>
        </div>
      </div>
    );
  }
}
export default Product2;