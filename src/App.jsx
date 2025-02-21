import Navigator from "../src/components/Navigator";
import Router from "../src/shared/Router";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <Router></Router>
    </BrowserRouter>
  );
};

export default App;
