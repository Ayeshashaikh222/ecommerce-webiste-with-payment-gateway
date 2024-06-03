import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./style.css";
import { Button } from "@mui/material";

const LoginBanner = () => {
  return (
    <div className="newsLetterBanner">
      <SendOutlinedIcon />
      <input type="text" placeholder="Your email address" />
      <Button className="bg-g">Subscribe</Button>
    </div>
  );
};

export default LoginBanner;
