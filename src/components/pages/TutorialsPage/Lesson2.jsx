import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Style/pages/TutorialsPage.scss";

import { Footer } from "../../";

import img1 from "../../../imgs/lessons/lesson=2/1.svg";
import img2 from "../../../imgs/lessons/lesson=2/2.svg";
import img3 from "../../../imgs/lessons/lesson=2/3.svg";

const Lesson2 = () => {
  const [arr] = useState([img1, img2, img3]);
  const [img, setImg] = useState(0);
  const [chapter, setChapter] = useState(1);
  const [icon, setIcon] = useState(1);

  const handleChapter = () => {
    if (chapter === 1) {
      setChapter(0);
    } else {
      setChapter(1);
    }
    handleIcon();
  };

  const handleIcon = () => {
    if (icon === 1) {
      setIcon(0);
    } else {
      setIcon(1);
    }
  };

  const handleNext = () => {
    if (img < 2) {
      setImg(img + 1);
    }
  };

  const handlePrevious = () => {
    if (img > 0) {
      setImg(img - 1);
    }
  };

  return (
    <main className="main-tutorials">
      <nav className="lesson-nav">
        <div className="nav-chapter">
          <div className="chapter-title active" onClick={() => handleChapter()}>
            <h1>1. مفهوم الفن</h1>
            <span
              className={`material-symbols-rounded title-icon ${
                icon === 1 ? "icon-active" : ""
              }`}
            >
              expand_more
            </span>
          </div>
          <div
            className={`chapter-lessons ${
              chapter === 1 ? "chapter-active" : ""
            }`}
          >
            <Link to="/tutorialsPage-lesson1">
              <div className="lessons-box">
                <span className="material-symbols-rounded box-icon">
                  play_lesson
                </span>
                <h2>تعريف الفن</h2>
              </div>
            </Link>
            <Link to="/tutorialsPage-lesson2">
              <div className="lessons-box active">
                <span className="material-symbols-rounded box-icon">
                  play_lesson
                </span>
                <h2>بناء العمل الفني</h2>
              </div>
            </Link>
            <Link to="/tutorialsPage-lesson3">
              <div className="lessons-box">
                <span className="material-symbols-rounded box-icon">
                  play_lesson
                </span>
                <h2>مكونات العمل الفني</h2>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="view-holder spikes">
        <img src={arr[img]} alt="" />
        <button
          className={`button holder-next ${img === 2 ? "unactive-button" : ""}`}
          onClick={() => handleNext()}
        >
          التالي
        </button>
        <button
          className={`button holder-previous ${
            img === 0 ? "unactive-button" : ""
          }`}
          onClick={() => handlePrevious()}
        >
          السابق
        </button>
      </div>
      <Footer />
    </main>
  );
};

export default Lesson2;
