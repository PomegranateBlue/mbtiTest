import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <nav className="navigation-container flex space-x-8 bg-sky-950">
      <Link to="/">Home</Link>
      <Link to="login">LogIn</Link>
      <Link to="/test">Test</Link>
    </nav>
  );
};

export default Navigator;
