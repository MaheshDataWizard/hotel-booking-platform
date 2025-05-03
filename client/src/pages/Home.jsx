import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
