import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import css from "./index.css";
import Products from "./components/product/Products";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
