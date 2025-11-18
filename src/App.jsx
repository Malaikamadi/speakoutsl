import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/footer";
import About from "./components/About"

import slide1 from "./images/slider1.jpeg";
import slide2 from "./images/slider2.jpeg";
import slide3 from "./images/slider3.jpeg";

export default function App() {
  const heroSlides = [
    {
      src: slide1,
      title: "SpeakOut Sierra Leone",
      subtitle: "A safe space for women & girls to report anonymously."
    },
    {
      src: slide2,
      title: "Your Voice Matters",
      subtitle: "Break the silence. We are here to listen."
    },
    {
      src: slide3,
      title: "Support. Strength. Safety.",
      subtitle: "Join our support group and community."
    }
  ];

  return (
    <>
      <Navbar />
      <HeroSlider slides={heroSlides} />
      <Footer />
      {}
    </>
  );
}
