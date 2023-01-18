import { Link } from "react-router-dom";
import Header from "./Header";
export default function Home() {
  return (
    <div>
      <Header />
      <h1>Home page</h1>
      <nav>
        <Link to="/login" className="active">
          Login
        </Link>
        <Link to="/register" className="active">
          Sign up
        </Link>
        <Link to="/accordion" className="active">
          Accordion
        </Link>
      </nav>
    </div>
  );
}
