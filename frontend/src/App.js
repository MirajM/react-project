import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import OrderDetail from "./components/OrderDetail";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/add">
              <Create />
            </Route>
            <Route path="/order/:id">
              <OrderDetail />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
