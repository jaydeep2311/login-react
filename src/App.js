import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import styled from "styled-components";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
const Navbar = styled.nav`
  background-color: black;
  color: white;
  padding: 10px;
`;

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {" "}
        <Homepage>
          <Navbar>
            <Switch>
              <Route path="/login">
                {" "}
                <Login />{" "}
              </Route>
              <Route path="/Register">
                {" "}
                <Login />{" "}
              </Route>
            </Switch>
          </Navbar>
        </Homepage>
      </Router>
    </div>
  );
}

export default App;
