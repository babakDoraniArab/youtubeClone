import React, { useState } from "react";

import { Container } from "react-bootstrap";
import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import Header from "./components/header/Header";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";
import Video from "./components/Video/Video";
import "./_app.scss";
import LoginScreen from "./screen/loginScreen/LoginScreen";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const handleToggleSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} sidebar={sidebar} />
      <div className="app__container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          <HomeScreen />
        </Container>
      </div>

      {/* <LoginScreen /> */}
    </>
  );
}

export default App;
