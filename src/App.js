import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";

import "./_app.scss";
import LoginScreen from "./screen/loginScreen/LoginScreen";
const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} sidebar={sidebar} />
      <div className="app__container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search" exact>
          <Layout>
            <h1>searchme</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
