import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import About from "./Pages/About";
import Listing from "./Pages/Listing";
import Footer from "./components/Footer/footer";
import NotFound from "./Pages/NotFound/index";
import ProductDetailPage from "./Pages/ProductDetails/index";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getData("http://localhost:3000/productData");
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        console.log(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route exact={true} path="/about" element={<About />}></Route>
        <Route exact={true} path="/listing" element={<Listing />}></Route>
        <Route exact={true} path="*" element={<NotFound />}></Route>
        <Route
          exact={true}
          path="/product/details"
          element={<ProductDetailPage />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
