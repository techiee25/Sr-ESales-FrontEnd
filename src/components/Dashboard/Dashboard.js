import React from "react";
import "../Dashboard/Styles/styles.css";

import Navbar from "../Dashboard/components/Navbar";
import HeroBanner from "../Dashboard/components/HeroBanner";
import Features from "../Dashboard/components/Feature";
import Services from "../Dashboard/components/Services";
import Pricing from "../Dashboard/components/Price";
import Download from "../Dashboard/components/Download";
import Footer from "../Dashboard/components/Footer";

export default function App() {
  return (
    <>
      <main>
        <HeroBanner />
        <Features />
        <Services />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </>
  );
}
