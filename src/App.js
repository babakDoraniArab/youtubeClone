import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";
import LoginScreen from "./screen/loginScreen/LoginScreen";

import "./_app.scss";
import WatchScreen from "./screen/watchScreen/WatchScreen";

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
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);
  return (
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
          <h1>Search Me</h1>
        </Layout>
      </Route>

      <Route path="/watch/:id" exact>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
