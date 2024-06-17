import React, { useEffect, useState } from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Product = (props) => {
  const [productData, setProductData] = useState();
  const [isAdded, setIsadded] = useState(false);

  useEffect(() => {
    setProductData(props.item);
  }, [props.item]);

  const setProductCat = () => {
    sessionStorage.setItem("parentCat", productData.parentCatName);
    sessionStorage.setItem("subCatName", productData.subCatName);
  };

  // const addToCart = (item) => {
  //   context.addToCart(item);
  //   setIsadded(true);
  // };

  return (
    <div className="productThumb" onClick={setProductCat}>
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}

      {productData !== undefined && (
        <>
          <Link to={`/product/${productData.id}`}>
            <div className="imageWrapper">
              <div className="p-4 wrapper mb-3">
                <img
                  src={productData.catImg + "?im=Resize=(420,420)"}
                  className="w-100"
                />
              </div>

              <div className="overlay transition">
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Add to Wishlist">
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Compare">
                      <CompareArrowsOutlinedIcon />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="cursor" tooltip="Quick View">
                      <VisibilityOutlinedIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <div className="info">
            <span className="d-block CategoryName">{productData.brand}</span>
            <h4 className="productTitel">
              <Link>{productData.productName.substr(0, 20) + "..."}</Link>
            </h4>
            <Rating
              name="half-rating-read"
              value={parseFloat(productData.rating)}
              precision={0.5}
              readOnly
            />
            <span className="brandName d-block">
              By <Link className="text-g">{productData.brand}</Link>
            </span>

            <div className="d-flex align-items-center mt-3">
              <div className="d-flex align-items-center w-100">
                <span className="price text-g font-weight-bold">
                  Rs {productData.price}
                </span>{" "}
                <span className="oldPrice ml-auto">
                  Rs {productData.oldPrice}
                </span>
              </div>
            </div>

            <Button
              className="w-100 transition mt-3"
              // onClick={() => addToCart(productData)}
            >
              <ShoppingCartOutlinedIcon />
              {isAdded === true ? "Added" : "Add"}
            </Button>
          </div>
        </>
      )}
      {/* <Link>
        <div className="imageWrapper">
          <img src={props.item.catImg} alt="productimg" className="w-100" />

          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Link className="cursor" tooltip="Add to Wishlist">
                  <FavoriteBorderOutlinedIcon />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="cursor" tooltip="Compare">
                  <CompareArrowsOutlinedIcon />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="cursor" tooltip="Quick View">
                  <VisibilityOutlinedIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Link>

      <div className="info">
        <span className="d-block CategoryName">Snack</span>
        <h4 className="productTitel">
          <Link>Seeds of change Oragnic Quinoa, Brown, & Red Rice</Link>
        </h4>
        <Rating
          className="rating"
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />
        <span className=" d-block brandName">
          By <Link className="text-g">NestFood</Link>
        </span>

        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="price text-g font-weight-bold">$28.85</span>
            <span className="oldPrice text-g font-weight-bold">$32.8</span>
          </div>

          <Button className="ml-auto transition">
            <ShoppingCartOutlinedIcon />
            Add
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
