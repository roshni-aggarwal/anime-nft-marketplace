import React, { useState } from "react";
import { Tab } from "@headlessui/react";

// components
import Navbar from "../components/Navbar";

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
  });
  return (
    <>
      <Navbar />
      <div className="">
        <Tab.Group>
          <Tab.List>
            <Tab>Profile</Tab>
            <Tab>Created</Tab>
            <Tab>Collected</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Dashboard;
