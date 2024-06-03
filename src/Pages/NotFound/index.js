import React from "react";
import "./style.css";
import NotFoundImg from "../../assets/images/page-404.png";
import { Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container-fluid">
        <div className="box">
          <img src={NotFoundImg} alt="image not found" />
          <h1>Page Not Found</h1>
          <p>
            The link you clicked may be broken or the page may have removed.
            visit the Homepage or Contact us about the problem.
          </p>
          <div className="d-flex">
            <Button className="btn-g btn-lg m-auto">
              <HomeOutlinedIcon />
              <Link to={"/"}>Back To Home Page</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
