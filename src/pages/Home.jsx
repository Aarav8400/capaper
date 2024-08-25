import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import CA_Test_Card from "../components/CA-test-card";
import Register from "../components/Register";
import Our_Test_Series from "../components/Our_Test_Series";
import Our_Plans from "../components/Our_Plans";
import Slider1 from "../components/Slide1";
import Physical_books from "../components/Physical_Books";


const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className="flex">
        <CA_Test_Card />
        <Register />
      </div>
      <Our_Test_Series />
      <Our_Plans />
      <Slider1 />
      <Physical_books />
    </>
  );
};

export default Home;
