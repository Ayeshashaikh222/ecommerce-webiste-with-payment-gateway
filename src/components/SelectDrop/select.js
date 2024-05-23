import React from "react";
import "../SelectDrop/select.css";

const select = () => {
  return (
    <>
      <div className="selectDropp">
        <div className="searchFeild">
          <input type="text" />
        </div>
        <ul className="searchResults">
          <li>Milks and Dairies</li>
          <li>wines & Drinks</li>
          <li>Clothing & beauty</li>
          <li>Fresh Seafood</li>
          <li>Pet Foods & Toy</li>
          <li>Fast Food</li>
          <li>Baking material</li>
          <li>vegetables</li>
          <li>Fresh Fruits</li>
          <li>Bread & Juice</li>
        </ul>
      </div>
    </>
  );
};

export default select;
