import React from "react";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import HeroSlider from "../components/HeroSlider";
import ImageSection from "../components/ImageSection";
import FullCTA from "../components/FullCTA";
import ServicesSection from "../components/ServicesSection";
import PlatformCTA from "../components/PlatformCTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const containerStyle = {
    width: "100%",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
    overflowX: "hidden", // prevent horizontal scroll
    backgroundColor: "#f5efe6"
  };

  const sectionStyle = {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <TopBar />
      <MainMenu />

      {/* Hero Slider */}
      <div style={{ ...sectionStyle }}>
        <HeroSlider
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "600px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Image Section */}
      <div style={{ ...sectionStyle }}>
        <ImageSection />
      </div>

      {/* Full Call-to-Action Section */}
      <div style={{ ...sectionStyle }}>
        <FullCTA />
      </div>

      {/* Services Section */}
      <div
        style={{
          ...sectionStyle,
          display: "flex",
          flexWrap: "wrap", // wrap on mobile
          justifyContent: "space-between", // space between cards
          gap: "20px",
        }}
      >
        <ServicesSection
          cardStyle={{
            flex: "1 1 calc(50% - 20px)", // 2 cards per row on tablet
            minWidth: "260px", // don't shrink below 260px
          }}
        />
      </div>

      {/* Platform CTA Section */}
      <div style={{ ...sectionStyle }}>
        <PlatformCTA />
      </div>

      {/* Contact Section */}
      <div style={{ ...sectionStyle }}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
