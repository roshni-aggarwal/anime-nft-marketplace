import React, { useState } from "react";
import { Menu } from "@headlessui/react";

// components
import Navbar from "../components/Navbar";
import NFTCards from "../components/Marketplace/NFTCards";

const Marketplace = () => {
  const sampleData = [
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
      name: "NFT#3",
      description: "Alchemy's Third NFT",
      website: "http://axieinfinity.io",
      image: "/images/nft3.avif",
      price: "0.03ETH",
      currentlySelling: "True",
      studio: "crunch",
      address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT#1",
      description: "Alchemy's First NFT",
      website: "http://axieinfinity.io",
      image: "/images/nft4.avif",
      price: "0.03ETH",
      currentlySelling: false,
      studio: "maapa",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT#2",
      description: "Alchemy's Second NFT",
      website: "http://axieinfinity.io",
      image: "/images/nft.avif",
      price: "0.03ETH",
      currentlySelling: "True",
      studio: "maapa",
      address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT#3",
      description: "Alchemy's Third NFT",
      website: "http://axieinfinity.io",
      image: "/images/nft2.avif",
      price: "0.03ETH",
      currentlySelling: false,
      studio: "crunch",
      address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex px-4 md:px-24 lg:px-36 my-8">
        <aside className="w-1/6 border-r border-gray-300 p-4">
          <h2 className="text-lg font-semibold">Filter</h2>
          <div className="flex flex-col gap-5 p-2 mt-4">
            <Menu>
              <Menu.Button className="flex gap-6 justify-between">
                Status
                <img src="images/down.png" alt="down" className="w-5" />
              </Menu.Button>
              <Menu.Items className="flex flex-col gap-2 px-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-left" href="">
                      Trending
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-left">Latest</button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <Menu>
              <Menu.Button className="flex gap-6 justify-between">
                Price
                <img src="images/down.png" alt="down" className="w-5" />
              </Menu.Button>
              <Menu.Items className="flex flex-col gap-2 px-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-left" href="">
                      Less than 20 ETH{" "}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-left">Less than 50 ETH</button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <Menu>
              <Menu.Button className="flex gap-6 justify-between">
                Studios
                <img src="images/down.png" alt="down" className="w-5" />
              </Menu.Button>
              <Menu.Items className="flex flex-col gap-2 px-1 text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-left" href="">
                      Maapa
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className="text-left">Crunch</button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </aside>
        <div className="p-5">
          <Menu>
            <Menu.Button>Sort by</Menu.Button>
            <Menu.Items className="flex flex-col gap-1">
              <Menu.Item>{({ active }) => <a href="">Popularity</a>}</Menu.Item>
              <Menu.Item>
                {({ active }) => <a href="">Price lower to higher</a>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <a href="">Price higher to lower</a>}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className="grid grid-cols-3 gap-5 mt-10">
            {sampleData.map((data) => (
              <NFTCards data={data} key={data.address} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
