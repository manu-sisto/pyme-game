import React from "react";
const ProgressBar = (props) => {

  let getProgress = props.nivel

  const progress = getProgress;

  return (
    <div className="container">
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${progress}%` }}>
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
