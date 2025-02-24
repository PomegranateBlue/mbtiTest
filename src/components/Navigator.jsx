import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <nav className="flex py-3 space-x-8 text-2xl text-white bg-sky-950">
      <Link to="/">Home</Link>
      <Link to="/login">LogIn</Link>
      <Link to="/test">Test</Link>
    </nav>
  );
};

export default Navigator;
