import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./Style/sass/helpers/_globalComponents.scss";

import {
  Header,
  HomePage,
  NotFoundPage,
  Lesson1,
  Lesson2,
  Lesson3,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorialsPage-lesson1" element={<Lesson1 />} />
          <Route path="/tutorialsPage-lesson2" element={<Lesson2 />} />
          <Route path="/tutorialsPage-lesson3" element={<Lesson3 />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
