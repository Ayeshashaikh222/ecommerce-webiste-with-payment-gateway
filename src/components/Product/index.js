import React from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Product = (props) => {
  return (
    <div className="productThumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}

      <Link>
        <div className="imageWrapper">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
            alt="productimg"
            className="w-100"
          />

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
      </div>
    </div>
  );
};

export default Product;
