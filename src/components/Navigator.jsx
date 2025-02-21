import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="login">LogIn</Link>
      <Link to="/test">Test</Link>
    </nav>
  );
};

export default Navigator;
