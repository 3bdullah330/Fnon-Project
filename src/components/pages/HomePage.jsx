import React from "react";
import { Link } from "react-router-dom";
import "../../Style/pages/HomePage.scss";
import { Footer } from "../";

import fnonImage from "../../imgs/fnon.svg";
import landingImage from "../../imgs/img-1.png";
import img2 from "../../imgs/img-2.png";

const HomePage = () => {
  return (
    <>
      <section className="landing">
        <div className="landing-holder container padding spikes">
          <div className="landing-text">
            <div className="landing-img-holder">
              <img src={fnonImage} alt="fnonImage" />
            </div>
            <h2>هي منصة تهدف لتسهيل مادة الفنون.</h2>
          </div>
          <div className="landing-img">
            <img src={landingImage} alt="landingImage" />
          </div>
        </div>
      </section>
      <section className="goals">
        <div className="spikes">
          <h1>أهدافنا</h1>
          <div className="goals-holder container padding">
            <div className="holder-box">
              <span className="material-symbols-rounded box-icon">
                local_library
              </span>
              <h2 className="box-heading">تعلّم سهم وممتع</h2>
              <span className="box-description">
                نقدم محتوى تعليمي بشكل بسيط وممتع وبجودة عالية.
              </span>
            </div>
            <div className="holder-box">
              <span className="material-symbols-rounded box-icon">
                diversity_2
              </span>
              <h2 className="box-heading">محتوى تعليمي متنوع</h2>
              <span className="box-description">
                نقدم محتوى متنوع ومتكامل يخدم مختلف الفئات والمجالات.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="advice">
        <div className="container padding spikes">
          <div className="advice-holder">
            <div className="holder-text">
              <h2>يمكنك البدء بتصفح كامل المحتوى التعليمي.</h2>
              <Link to="/tutorialsPage-lesson1">
                <button className="text-button button">
                  الانتقال للمحتوى التعليمي
                </button>
              </Link>
            </div>
            <img src={img2} alt="img" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
