import React from "react";
import ReactDOM from "react-dom";
import "./Loader.css";
import LoaderImg from "../../images/loader.gif";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={LoaderImg} alt="loader" />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
