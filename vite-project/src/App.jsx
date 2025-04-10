import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Container from "./components/Container";
import { Routes, Route, Link } from "react-router-dom";
import Project from "./Pages/Project";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container />
                <Footer />
              </>
            }
          />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
       
      </div>
    </>
  );
}

export default App;
