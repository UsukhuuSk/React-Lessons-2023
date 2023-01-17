import { Link } from "react-router-dom";
export default function Index() {
  const aboutPageData = {
    from: "Index",
    message: "Welcome to About Page",
    timestamp: Date.now(),
  };
  const HomePageData = {
    from: "Index",
    message: "Welcome to About Page",
    timestamp: Date.now(),
  };

  return (
    <div>
      <h1>Day-44 - Dynamic routing</h1>
      <div className="navstyle">
        <Link to={"/aboutpage"} state={aboutPageData}>
          About Page
        </Link>
        <Link to={"/home"} state={HomePageData}>
          Home
        </Link>
        <Link to={"/accordion"}>Accordion</Link>
        <Link to={"/movies"}>Movies Page</Link>
      </div>
    </div>
  );
}
