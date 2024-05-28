import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route exact={true} path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
