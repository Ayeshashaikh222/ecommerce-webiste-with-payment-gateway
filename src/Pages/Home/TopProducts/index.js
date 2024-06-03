import React from "react";
import "./style.css";
import itemimg1 from "../../../assets/images/thumbnail-1.jpg";
import itemimg2 from "../../../assets/images/thumbnail-1.jpg";
import itemimg3 from "../../../assets/images/thumbnail-1.jpg";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const TopProducts = (props) => {
  return (
    <>
      <div className="topSelling_box">
        <h3>{props.title}</h3>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link>
              <img src={itemimg1} alt="item image" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link>
              <h4>Nestle original coffee-Mate coffee Creamer</h4>
            </Link>
            <Rating
              className="rating"
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />

            <div className="d-flex align-items-center mt-2">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice text-g font-weight-bold">$32.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link>
              <img src={itemimg1} alt="item image" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link>
              <h4>Nestle original coffee-Mate coffee Creamer</h4>
            </Link>
            <Rating
              className="rating"
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />

            <div className="d-flex align-items-center mt-2">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice text-g font-weight-bold">$32.8</span>
            </div>
          </div>
        </div>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link>
              <img src={itemimg1} alt="item image" className="w-100" />
            </Link>
          </div>

          <div className="info px-3">
            <Link>
              <h4>Nestle original coffee-Mate coffee Creamer</h4>
            </Link>
            <Rating
              className="rating"
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />

            <div className="d-flex align-items-center mt-2">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice text-g font-weight-bold">$32.8</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
