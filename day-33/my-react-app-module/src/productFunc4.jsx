function ProductFunc() {
  return (
    <div className="productno4">
      <img src="images/rose.png" className="App-logo" alt="logo" />
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
          <p className="count">23</p>
        </div>
        <p className="title">Supermajority: The Fantasy Congress League</p>
        <p>Earn points when your favorite politicians pass legislation.</p>
        <p className="submit">
          Submitted by:
          {<img src="images/molly.png" className="submit-pic rounded-circle" />}
        </p>
      </div>
    </div>
  );
}
export default ProductFunc;
