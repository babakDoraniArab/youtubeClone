import { Container } from "react-bootstrap";

import CategoriesBar from "./components/categoriesBar/CategoriesBar";
import Header from "./components/header/Header";
import HomeScreen from "./screen/homeScreen/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";
import Video from "./components/Video/Video";
import "./_app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="app__container border border-info">
        <Sidebar />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
