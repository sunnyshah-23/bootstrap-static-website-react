import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Service from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
