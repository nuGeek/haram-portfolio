import React from "react";

const WorkBox = ({ inProgress, img, linkTo, title, descript, descript2, feature }) => {
  const navigate = () => {
    window.location.href = `${linkTo}`;
  };

  if(!inProgress) {
        
  }

  return (

    

    <div className="WorkBox">
      <div className="work_img">
        {" "}
        <img
          src={process.env.PUBLIC_URL + `/images/${img}.png`}
          alt=""
          onClick={navigate}
        />
      </div>

      <div className="work_descript">
        <h2>{title}</h2>
        <p className="descript">{descript}</p>
        <p className="descript2">{descript2}</p>

        <p> {feature}</p>
      </div>
    </div>
  );
};

export default WorkBox;
