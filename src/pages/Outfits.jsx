import React from "react";
import Navbar from "../components/Navbar";
import OutfitCategory from "../components/OutfitCategory/OutfitCategory";
import Footer from "../components/Footer";
import FavouriteId from "../components/FavouriteId";

const Outfits = () => {
  return (
    <div>
      <Navbar/>
      <OutfitCategory/>
      
      <Footer />
    </div>
  )
}

export default Outfits
