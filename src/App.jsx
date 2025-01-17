// src/App.jsx
import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Excursion from "./pages/Excursion";
import Development from "./components/Development/Development";
import Footer from "./components/Footer/Footer";
import Adminka from "./pages/Adminka";
import GallerySection from "./components/GallerySection/GallerySection";
import { PhotoProvider } from "./context";
import Board from "./pages/Board";
import Contacts from "./pages/Contacts";



const App = () => {
  return (
    <PhotoProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/excursion" element={<Excursion />} />
        <Route path="/devel" element={<Development />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/admin" element={<Adminka />} />
        <Route path="/structure" element={<Board/>} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>

      <Footer />
    </PhotoProvider>
  );
};

export default App;