import React from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HomePage/HeroSection";
import Trending from "../components/HomePage/Trending";
import TopCollection from "../components/HomePage/TopCollection";
import Newsletter from "../components/HomePage/Newsletter";

const Home = () => {
  const user = {
    name: "Roshni",
    image: "images/user.png",
  };

  const trending = [
    {
      name: "azuki",
      artist: "images/artist.avif",
      nft: "images/nft.avif",
      price: "15.75 ETH",
      _id: 1,
    },
    {
      name: "azuki",
      artist: "images/artist.avif",
      nft: "images/nft2.avif",
      price: "15.75 ETH",
      _id: 2,
    },
    {
      name: "azuki",
      artist: "images/artist.avif",
      nft: "images/nft3.avif",
      price: "15.75 ETH",
      _id: 3,
    },
    {
      name: "azuki",
      artist: "images/artist.avif",
      nft: "images/nft4.avif",
      price: "15.75 ETH",
      _id: 4,
    },
  ];

  const topStudio = [
    {
      name: "ghost",
      image: "images/studio1.avif",
    },
    {
      name: "doodles",
      image: "images/studio2.avif",
    },
    {
      name: "moonBirds",
      image: "images/studio3.avif",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-24 lg:px-32">
        <HeroSection />
        <Trending trending={trending} />
        <TopCollection topStudio={topStudio} />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
