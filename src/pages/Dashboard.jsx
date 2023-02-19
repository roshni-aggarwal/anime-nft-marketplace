import React, { useState } from "react";
import { Tab } from "@headlessui/react";

// components
import Navbar from "../components/Navbar";
import NFTCards from "../components/Marketplace/NFTCards";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "Roshni",
    image: "/images/user.png",
    usernames: "rosh314",
    wallet_address: "0dvf554541dxvfdva",
    social_links: "",
    created: [
      {
        name: "NFT#1",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "images/nft.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#2",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "images/nft2.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
      },
    ],
    collections: [
      {
        name: "NFT#4",
        description: "Alchemy's First NFT",
        website: "http://axieinfinity.io",
        image: "images/nft3.avif",
        price: "0.03ETH",
        currentlySelling: "True",
        studio: "maapa",
        address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
      },
      {
        name: "NFT#3",
        description: "Alchemy's Second NFT",
        website: "http://axieinfinity.io",
        image: "images/nft4.avif",
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
      <div className="conatiner mx-auto px-4 md:px-24 lg:px-48 my-10">
        <Tab.Group>
          <div className="flex gap-10">
            <Tab.List className="flex flex-col items-start gap-10 border-r border-gray-200 p-5">
              <Tab className="text-2xl">Profile</Tab>
              <Tab className="text-2xl">Created</Tab>
              <Tab className="text-2xl">Collected</Tab>
            </Tab.List>
            <Tab.Panels className="w-4/5">
              <Tab.Panel>
                <h1>Personal Details</h1>
                <div className="flex gap-10">
                  <div className="flex flex-col gap-5">
                    <h1 className="p-2 border border-black">{user.name}</h1>
                    <h1 className="p-2 border border-black">
                      {user.wallet_address}
                    </h1>
                    <h1 className="p-2 border border-black">
                      {user.social_links}
                    </h1>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={user.image}
                      alt="profile"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="flex gap-4 h-1/2">
                {user.created.map((nft) => (
                  <NFTCards data={nft} />
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex gap-4 h-1/2">
                {user.collections.map((nft) => (
                  <NFTCards data={nft} />
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </>
  );
};

export default Dashboard;
