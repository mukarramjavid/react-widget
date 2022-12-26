import React from "react";
import config from "../../Configuration/config";

const Spinner = () => {
  const onImageError = (e) => {
    e.target.src = `${config.rootURL}images/official-logo-soon.jpg`;
  };
  return (
    <div className="loader_img">
      <img src={`${config.rootURL}images/spinner.gif`} onError={onImageError} alt="spinner" />
    </div>
  );
};

export default Spinner;
