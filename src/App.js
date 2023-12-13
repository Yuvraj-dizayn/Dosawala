import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComp from "./Componets/Home/HomeComp/HomeComp";
import ImageWithDescMain from "./ImageWithDescMain";
import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route element={<HomeComp />} exact path="/" />
            <Route element={<ImageWithDescMain />} exact path="/about" />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
