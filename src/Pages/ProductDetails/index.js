import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Button } from "@mui/material";
import SideBar from "../../components/SideBar/index";
import Product from "../../components/Product";
import axios from "axios";
import QuantityBox from "../../components/QuantityBox";

const ProductDetailPage = (props) => {
  const [ZoomImage, setZoomImage] = useState(
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-5.jpg"
  );
  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);

  const [smallImageSize, setsmallImageSize] = useState([150, 150]);

  const [activeSize, setActiveSize] = useState(0);

  const [inputValue, setInputValue] = useState(1);

  const [activeTab, setActiveTab] = useState(0);

  const [currentProduct, setCurrentProduct] = useState({});

  const [isAdded, setIsadded] = useState(false);

  const [prodCat, setProdCat] = useState({
    parentCat: sessionStorage.getItem("parentCat"),
    subCatName: sessionStorage.getItem("subCatName"),
  });

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [rating, setRating] = useState(0.0);

  const [reviewsArr, setReviewsArr] = useState([]);

  const [isAlreadyAddedInCart, setisAlreadyAddedInCart] = useState(false);

  const [reviewFields, setReviewFields] = useState({
    review: "",
    userName: "",
    rating: 0.0,
    productId: 0,
    date: "",
  });

  const zoomSlider = useRef();
  const zoomSliderBig = useRef();

  let { id } = useParams();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  var related = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  const isActive = (index) => {
    setActiveSize(index);
  };

  const plus = () => {
    setInputValue(inputValue + 1);
  };

  const minus = () => {
    if (inputValue !== 1) {
      setInputValue(inputValue - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    props.data.length !== 0 &&
      props.data.map((item) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            item_.products.length !== 0 &&
              item_.products.map((product) => {
                if (parseInt(product.id) === parseInt(id)) {
                  setCurrentProduct(product);
                }
              });
          });
      });

    //related products code

    const related_products = [];

    props.data.length !== 0 &&
      props.data.map((item) => {
        if (prodCat.parentCat === item.cat_name) {
          item.items.length !== 0 &&
            item.items.map((item_) => {
              if (prodCat.subCatName === item_.cat_name) {
                item_.products.length !== 0 &&
                  item_.products.map((product, index) => {
                    if (product.id !== parseInt(id)) {
                      related_products.push(product);
                    }
                  });
              }
            });
        }
      });

    if (related_products.length !== 0) {
      setRelatedProducts(related_products);
    }

    showReviews();

    getCartData("http://localhost:5000/cartItems");
  }, [id]);

  const changeInput = (name, value) => {
    if (name === "rating") {
      setRating(value);
    }
    setReviewFields(() => ({
      ...reviewFields,
      [name]: value,
      productId: id,
      date: new Date().toLocaleString(),
    }));
  };

  const reviews_Arr = [];

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/productReviews", reviewFields)
        .then((response) => {
          reviews_Arr.push(response.data);
          setReviewFields(() => ({
            review: "",
            userName: "",
            rating: 0.0,
            productId: 0,
            date: "",
          }));
        });
    } catch (error) {
      console.log(error.message);
    }

    showReviews();
  };

  var reviews_Arr2 = [];
  const showReviews = async () => {
    try {
      await axios
        .get("http://localhost:3000/productReviews")
        .then((response) => {
          if (response.data.length !== 0) {
            response.data.map((item) => {
              if (parseInt(item.productId) === parseInt(id)) {
                reviews_Arr2.push(item);
              }
            });
          }
        });
    } catch (error) {
      console.log(error.message);
    }

    if (reviews_Arr2.length !== 0) {
      setReviewsArr(reviews_Arr2);
    }
  };

  const addToCart = (item) => {
    // context.addToCart(item);
    setIsadded(true);
  };

  const getCartData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        response.data.length !== 0 &&
          response.data.map((item) => {
            if (parseInt(item.id) === parseInt(id)) {
              setisAlreadyAddedInCart(true);
            }
          });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="detailsPage mb-5">
      {
        // context.windowWidth > 992 && (
        <div className="breadcrumbWrapper mb-4">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link>Home</Link>{" "}
              </li>
              <li>
                <Link
                  to={`/cat/${prodCat.parentCat
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  onClick={() =>
                    sessionStorage.setItem(
                      "cat",
                      prodCat.parentCat.split(" ").join("-").toLowerCase()
                    )
                  }
                  className="text-capitalize"
                >
                  {prodCat.parentCat}
                </Link>{" "}
              </li>

              <li>
                <Link
                  to={`/cat/${prodCat.parentCat.toLowerCase()}/${prodCat.subCatName
                    .replace(/\s/g, "-")
                    .toLowerCase()}`}
                  onClick={() =>
                    sessionStorage.setItem(
                      "cat",
                      prodCat.subCatName.toLowerCase()
                    )
                  }
                  className="text-capitalize"
                >
                  {prodCat.subCatName}
                </Link>{" "}
              </li>
              <li>{currentProduct.productName}</li>
            </ul>
          </div>
        </div>
        // )
      }

      <div className="container detailsContainer pt-3 pb-3">
        <div className="row">
          <div className="col-md-5">
            <div className="productZoom">
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                {currentProduct.productImages !== undefined &&
                  currentProduct.productImages.map((imgUrl, index) => (
                    <div className="item">
                      <InnerImageZoom
                        zoomType="hover"
                        zoomScale={1}
                        src={`${imgUrl}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`}
                      />
                    </div>
                  ))}
              </Slider>
            </div>

            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              {currentProduct.productImages !== undefined &&
                currentProduct.productImages.map((imgUrl, index) => {
                  return (
                    <div className="item">
                      <img
                        src={`${imgUrl}?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`}
                        className="w-100"
                        onClick={() => goto(index)}
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="col-md-7 productInfo">
            <h1>{currentProduct.productName}</h1>
            <div className="d-flex align-items-center mb-4 mt-3">
              <Rating
                className="rating"
                name="half-rating-read"
                value={parseFloat(currentProduct.rating)}
                precision={0.5}
                readOnly
              />
              <span className="text-light">(32 reviews)</span>
            </div>

            <div className="priceSection d-flex align-items-center mb-3">
              <span className="text-g priceLarge">
                Rs {currentProduct.price}
              </span>
              <div className=" d-flex flex-column ml-2">
                <span className="text-org">{currentProduct.discount} off</span>
                <span className="text-light oldPrice">
                  Rs {currentProduct.oldPrice}
                </span>
              </div>
            </div>

            <p>{currentProduct.description}</p>

            {currentProduct.weight !== undefined &&
              currentProduct.weight.length !== 0 && (
                <div className="productSize d-flex align-items-center">
                  <span>Size / Weight:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    {currentProduct.weight.map((item, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {item}g
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

            {currentProduct.RAM !== undefined &&
              currentProduct.RAM.length !== 0 && (
                <div className="productSize d-flex align-items-center">
                  <span>RAM:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    {currentProduct.RAM.map((RAM, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {RAM} GB
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

            {currentProduct.SIZE !== undefined &&
              currentProduct.SIZE.length !== 0 && (
                <div className="productSize d-flex align-items-center">
                  <span>SIZE:</span>
                  <ul className="list list-inline mb-0 pl-4">
                    {currentProduct.SIZE.map((SIZE, index) => {
                      return (
                        <li className="list-inline-item">
                          <a
                            className={`tag ${
                              activeSize === index ? "active" : ""
                            }`}
                            onClick={() => isActive(index)}
                          >
                            {SIZE}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

            <div className="d-flex align-items-center">
              <div>
                <QuantityBox />
              </div>

              <div className="d-flex align-items-center ml-3">
                <Button className="addtocartbtn btn-g btn-lg">
                  <ShoppingCartOutlinedIcon />
                  Add to Cart
                </Button>
                <Button className="addtocartbtn btn-lg ml-3 btn-border">
                  <FavoriteBorderOutlinedIcon />
                </Button>
                <Button className="addtocartbtn btn-lg ml-3 btn-border ">
                  <CompareArrowsOutlinedIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-5 p-5 detailsPageTabs">
          <div className="customTabs">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button
                  className={`${activeTab === 0 && "active"}`}
                  onClick={() => setActiveTab(0)}
                >
                  Description
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activeTab === 1 && "active"}`}
                  onClick={() => setActiveTab(1)}
                >
                  Additional info
                </Button>
              </li>

              <li className="list-inline-item">
                <Button
                  className={`${activeTab === 2 && "active"}`}
                  onClick={() => setActiveTab(2)}
                >
                  Reviews (3)
                </Button>
              </li>
            </ul>

            <br />

            {activeTab === 0 && (
              <div className="tabContent">
                <p>{currentProduct.description}</p>

                <br />
              </div>
            )}

            {activeTab === 1 && (
              <div className="tabContent">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr class="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr class="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr class="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr class="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr class="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr class="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr class="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr class="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr class="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr class="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr class="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr class="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr class="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="tabContent">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Customer questions & answers</h3>
                    <br />

                    {reviewsArr.length !== 0 &&
                      reviewsArr !== undefined &&
                      reviewsArr.map((review, index) => {
                        return (
                          <div
                            className="card p-4 reviewsCard flex-row"
                            key={index}
                          >
                            <div className="image">
                              <div className="rounded-circle">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                              </div>
                              <span className="text-g d-block text-center font-weight-bold">
                                {review.userName}
                              </span>
                            </div>

                            <div className="info pl-5">
                              <div className="d-flex align-items-center w-100">
                                <h5 className="text-light">{review.date}</h5>
                                <div className="ml-auto">
                                  <Rating
                                    name="half-rating-read"
                                    value={parseFloat(review.rating)}
                                    precision={0.5}
                                    readOnly
                                  />
                                </div>
                              </div>

                              <p>{review.review} </p>
                            </div>
                          </div>
                        );
                      })}

                    {/* <div className="card p-4 reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                            alt="customer image"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold pt-2">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              className="rating"
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum vehicula ex eu tincidunt faucibus.
                          Quisque tincidunt eros sed metus vulputate, sit amet
                          scelerisque erat sollicitudin. Sed id magna non eros
                          dictum blandit. Nam et enim sed orci scelerisque
                          lacinia. Curabitur lacinia tortor.
                        </p>
                      </div>
                    </div> */}
                    {/* 
                    <div className="card p-4 reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                            alt="customer image"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold pt-2">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              className="rating"
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum vehicula ex eu tincidunt faucibus.
                          Quisque tincidunt eros sed metus vulputate, sit amet
                          scelerisque erat sollicitudin. Sed id magna non eros
                          dictum blandit. Nam et enim sed orci scelerisque
                          lacinia. Curabitur lacinia tortor.
                        </p>
                      </div>
                    </div>

                    <div className="card p-4 reviewCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                            alt="customer image"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold pt-2">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              className="rating"
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum vehicula ex eu tincidunt faucibus.
                          Quisque tincidunt eros sed metus vulputate, sit amet
                          scelerisque erat sollicitudin. Sed id magna non eros
                          dictum blandit. Nam et enim sed orci scelerisque
                          lacinia. Curabitur lacinia tortor.
                        </p>
                      </div>
                    </div>

                    <div className="card p-4 reviewCard flex-row ">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png"
                            alt="customer image"
                          />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold pt-2">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2022 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              className="rating"
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum vehicula ex eu tincidunt faucibus.
                          Quisque tincidunt eros sed metus vulputate, sit amet
                          scelerisque erat sollicitudin. Sed id magna non eros
                          dictum blandit. Nam et enim sed orci scelerisque
                          lacinia. Curabitur lacinia tortor.
                        </p>
                      </div>
                    </div> */}

                    <br />
                    <br />

                    <form className="reviewForm" onSubmit={submitReview}>
                      <h4>Add a review</h4>
                      <br />
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Write a Review"
                          name="review"
                          value={reviewFields.review}
                          onChange={(e) =>
                            changeInput(e.target.name, e.target.value)
                          }
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <input
                              type="text"
                              value={reviewFields.userName}
                              className="form-control"
                              placeholder="Name"
                              name="userName"
                              onChange={(e) =>
                                changeInput(e.target.name, e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6 ">
                          <div className="form-group">
                            <Rating
                              name="rating"
                              value={rating}
                              precision={0.5}
                              onChange={(e) =>
                                changeInput(e.target.name, e.target.value)
                              }
                            />
                            {/* <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              name="Email"
                            /> */}
                          </div>
                        </div>
                      </div>

                      {/* <div className="form-group mb-5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website"
                        />
                      </div> */}

                      <div className="form-group">
                        <Button type="submit" className="btn-g btn-lg">
                          Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-4 pl-5">
                    <h4>Customer Review</h4>
                    <div className="d-flex align-items-center mt-2">
                      <Rating
                        className="rating"
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <strong className="ml-3">4.8 out of 5</strong>
                    </div>

                    <br />

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">5 Star</span>
                      <div
                        className="progress"
                        style={{ width: "80%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "75%", height: "20px" }}
                        >
                          70%
                        </div>
                      </div>
                    </div>

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">4 Star</span>
                      <div
                        className="progress"
                        style={{ width: "80%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "50%", height: "20px" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">3 Star</span>
                      <div
                        className="progress"
                        style={{ width: "80%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "55%", height: "20px" }}
                        >
                          55%
                        </div>
                      </div>
                    </div>

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">2 Star</span>
                      <div
                        className="progress"
                        style={{ width: "80%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "35%", height: "20px" }}
                        >
                          35%
                        </div>
                      </div>
                    </div>

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">1 Star</span>
                      <div
                        className="progress"
                        style={{ width: "80%", height: "20px" }}
                      >
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "25%", height: "20px" }}
                        >
                          25%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relatedProducts pt-5 pb-4 ">
          <h3 className="hd mb-0 mt-3 mb-5">Related Products</h3>
          <Slider {...related} className="productSlider">
            {relatedProducts.length !== 0 &&
              relatedProducts.map((product, index) => {
                return (
                  <div className="item" key={index}>
                    <Product tag={product.type} item={product} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
