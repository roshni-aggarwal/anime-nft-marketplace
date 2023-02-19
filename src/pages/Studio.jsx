import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useParams } from "react-router";
import NFTCards from "../components/Marketplace/NFTCards";

const Studio = () => {
  const { name } = useParams();

  const [studio, setStudio] = useState({
    name: name,
    cover_photo: "/images/nft.avif",
    dp: "/images/artist.avif",
    desc: "new anime series",
    created_date: "12 August,2020",
    collections: [
      {
        name: "NFT#1",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#2",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft2.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#1",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#2",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft2.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#1",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#2",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft2.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#1",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#2",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft2.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#1",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#2",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "/images/nft2.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
      },
    ],
  });

  return (
    <>
      <Navbar />
      <div className="w-full relative h-[60vh]">
        <img
          src={studio.cover_photo}
          alt="cover_photo"
          className="w-full h-full bg-cover"
        />
        <div className="absolute -bottom-16 left-32 p-2 w-32 bg-black">
          <img
            src={studio.dp}
            alt="logo"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
      </div>
      <div className="container mx-auto my-20 flex flex-col gap-4 px-4 md:px-32">
        <h1 className="capitalize font-bold text-5xl">{studio.name}</h1>
        <div className="flex items-center gap-12">
          <p className="text-lg font-medium p-2 border-2 border-black border-r-4 border-b-4 w-max">
            Items {studio.collections.length}
          </p>
          <p className="text-lg font-medium p-2 border-2 border-black border-r-4 border-b-4 w-max">
            Created at {studio.created_date}
          </p>
        </div>
        <p className="text-lg">{studio.desc}</p>
      </div>
      <div className="container mx-auto px-4 md:px-24 lg:px-36 ">
        <h1 className="text-3xl font-medium">Collections</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
          {studio.collections.map((nft) => (
            <NFTCards data={nft} key={nft.address} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Studio;
