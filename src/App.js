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
import { useEffect, useState, createContext } from "react";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

const MyContext = createContext();

function App() {
  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isopenNavigation, setIsopenNavigation] = useState(false);

  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsopenFilters] = useState(false);

  const [cartTotalAmount, setCartTotalAmount] = useState();

  useEffect(() => {
    getData("http://localhost:3000/productData");
    // getCartData("http://localhost:3000/productData");
    getCartData("http://localhost:3000/cartItems");
  }, []);

  const getData = async (url) => {
    try {
      const response = await axios.get(url);

      setProductData(response.data);
      // setCartItems(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCartData = async (url) => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setCartItems(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = async (item) => {
    item.quantity = 1;

    try {
      await axios.post("http://localhost:3000/cartItems", item).then((res) => {
        if (res !== undefined) {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemsFromCart = (id) => {
    // const response = await axios.delete(
    //   `http://localhost:3000/cartItems/${id}`
    // );
    // if (response !== null) {
    //   getCartData("http://localhost:3000/cartItems");
    // }

    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const signIn = () => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login);
  };

  const signOut = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  const openFilters = () => {
    setIsopenFilters(!isOpenFilters);
  };

  const value = {
    cartItems,
    isLogin,
    windowWidth,
    isOpenFilters,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    signOut,
    signIn,
    openFilters,
    isopenNavigation,
    setIsopenNavigation,
    setCartTotalAmount,
    cartTotalAmount,
    setCartItems,
    cartItems,
  };

  return (
    productData.length !== 0 && (
      <BrowserRouter>
        <MyContext.Provider value={value}>
          {/* {isLoading === true && (
            <div className="loader">
              <img src={Loader} />
            </div>
          )} */}
          <Header data={productData} />
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Home data={productData} />}
            />
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
            <Route
              exact={true}
              path="/product/:id"
              element={<ProductDetailPage data={productData} />}
            />
            <Route
              exact={true}
              path="/product/:id"
              element={<ProductDetailPage data={productData} />}
            />
            <Route exact={true} path="/cart" element={<Cart />} />
            <Route exact={true} path="/SignUp" element={<SignUp />} />
            <Route exact={true} path="/SignIn" element={<SignIn />} />
            <Route exact={true} path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
    )
  );
}

export default App;
export { MyContext };
