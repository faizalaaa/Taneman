import React from "react";
import Header from "./Component/Header";
// import Hero from "./Component/hero";
import ListCard from "./Component/ListCard";
import { useAnimalContext } from "../api/Animal";

const HomePage = () => {
  const { animals } = useAnimalContext();

  return (
    <>
      <div>
        <Header />
        {/* <Hero /> */}
        <ListCard animals={animals} />
      </div>
    </>
  );
};

export default HomePage;
