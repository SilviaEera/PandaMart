import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Sale from "../../components/Sale";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Sale />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
