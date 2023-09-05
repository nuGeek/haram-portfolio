import React from "react";
import WorkBox from "./WorkBox";

const Works = () => {
  return (
    <div className="Works ">
      <div className="work_container">
        <WorkBox
          img={"emo-diary"}
          linkTo={"https://haram-react-projects.web.app/"}
          title={"EMOTION DIARY"}
          descript={
            "It is a simple project that allows users write their daily journey with their emotion ratings. Users can write, edit and delete their diary. Also, filter by emotion rating and chronical order is available once they have some diary.     It uses local storage to save data but database system will be implemented along with login system.   "
          }
          descript2={
            "This was just very first project to learn fundamental features and architectue of React app: Components, Single Page Application, Routes, States and App Deployment "
          }
        />

        {/* <div>
          <iframe src="https://haram-react-projects.web.app/"></iframe>
        </div> */}

        <WorkBox
          img={"ecommerce-home"}
          linkTo={"https://haram-react-projects.web.app/"}
          title={"ECOMMERCE APP"}
          descript={
            "It is a simple e-commerce application with navigation between categories and products, login and registration functionality, management of shopping cart, and payment gateway integration."
          }
          descript2={
            "This app features: Dynamic routing to display data depending upon category. API call to fetch products data. State stored and persisted using Redux and local storage. User authentication to make payments. "
          }
        />
      </div>
    </div>
  );
};

export default Works;
