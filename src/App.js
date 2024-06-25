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
      const response = await axios.get(url);
      // console.log(response.data);
      setProductData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    productData.length !== 0 && (
      <BrowserRouter>
        <Header data={productData} />
        <Routes>
          <Route exact={true} path="/" element={<Home data={productData} />} />
          <Route
            exact={true}
            path="/cat/:id"
            element={<Listing data={productData} single={true} />}
          />
          <Route
            exact={true}
            path="/cat/:id/:id"
            element={<Listing data={productData} single={false} />}
          />
          {/* <Route
            exact={true}
            path="/product/details"
            element={<ProductDetailPage />}
          /> */}
          <Route exact={true} path="/about" element={<About />} />
          <Route exact={true} path="*" element={<NotFound />} />
          <Route
            exact={true}
            path="/product/:id"
            element={<ProductDetailPage data={productData} />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  );
}

export default App;
