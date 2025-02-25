import Navigator from "../src/components/Navigator";
import Router from "../src/shared/Router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <ToastContainer />
      <Router></Router>
    </BrowserRouter>
  );
};

export default App;
