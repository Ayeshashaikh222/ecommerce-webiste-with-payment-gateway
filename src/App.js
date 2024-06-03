import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import About from "./Pages/About";
import Listing from "./Pages/Listing";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route exact={true} path="/about" element={<About />}></Route>
        <Route exact={true} path="/listing" element={<Listing />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
