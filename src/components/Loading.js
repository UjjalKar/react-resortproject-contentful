import React from "react";
import LoadingImg from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={LoadingImg} alt="Loading" />
    </div>
  );
};

export default Loading;
