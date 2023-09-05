import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Banners from "../components/Banners";
import Works from "../components/Works";



const Home = () => {

  
  
  return (
    <div className="Home background">
      <Navigation />``
      <div className="body_box">
        <h1 className="title">
          Haram Shin: <span>FFRONT-END DEVELOPER</span>
          <br />
        </h1>

        <Banners />

        <hr />

        <Works />

<hr />

        <div>
<h2>this is content box</h2>
<p>How it's built</p>
<p>Component tree</p>
<p>Functions used </p>
<p>Future implements : login system, actual database </p>

<p>
    The emotion diary is built using pure react.
</p>

<h2>The project in inProgress: UX/UI design - House Church website using Angular</h2>
        </div>

        <hr />

        <div className="toolBox">
          <h2>Tool Box</h2>

          <div className="toolBox_container">
            <div> <img src={process.env.PUBLIC_URL + `/images/CSS.svg`} alt="" /> </div>
            <div> <img src={process.env.PUBLIC_URL + `/images/HTML.svg`} alt="" />  </div>
            <div> <img src={process.env.PUBLIC_URL + `/images/JavaScript.svg`} alt="" />  </div>
            <div> <img src={process.env.PUBLIC_URL + `/images/React-Dark.svg`} alt="" /> </div>
            {/* <div>5 </div>
            <div>1 </div>
            <div>2 </div>
            <div>3 </div> */}
          
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
