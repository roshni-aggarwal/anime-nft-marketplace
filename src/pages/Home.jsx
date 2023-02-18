import React from "react";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HomePage/HeroSection";
import Trending from "../components/HomePage/Trending";
import TopCollection from "../components/HomePage/TopCollection";

const Home = () => {
  const user = {
    name: "Roshni",
    image: "images/user.png",
  };

  const trending = [
    {
      name: "Azuki",
      artist: "images/artist.avif",
      nft: "images/nft.avif",
      price: "15.75 ETH",
      _id: 1,
    },
    {
      name: "Azuki",
      artist: "images/artist.avif",
      nft: "images/nft2.avif",
      price: "15.75 ETH",
      _id: 2,
    },
    {
      name: "Azuki",
      artist: "images/artist.avif",
      nft: "images/nft3.avif",
      price: "15.75 ETH",
      _id: 3,
    },
    {
      name: "Azuki",
      artist: "images/artist.avif",
      nft: "images/nft4.avif",
      price: "15.75 ETH",
      _id: 4,
    },
    ];
    
    const topStudio = [
        {
            name: "ghost",
            image: "images/studio1.avif"
        },
        {
            name: "Doodles",
            image: "images/studio2.avif"
        },
        {
            name: "MoonBirds",
            image: "images/studio3.avif"
        }
    ]
  return (
    <>
      <Navbar user={user} />
      <HeroSection />
      <Trending trending={trending} />
      <TopCollection topStudio={topStudio} />
      <Footer />
    </>
  );
};

export default Home;
