import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import NFT from "./pages/NFT";
import Studio from "./pages/Studio";
import SellNFT from "./components/SellNFT";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Dashboard />} />
        <Route path="market" element={<Marketplace />} />
        <Route path="SellNFT" element={<SellNFT />} />
        <Route path="collection/:name" element={<Studio />} />
        <Route path="collection/:name/:id" element={<NFT />} />
      </Routes>
    </div>
  );
}

export default App;
