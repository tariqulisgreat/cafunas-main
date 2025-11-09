import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";
import uniforLogo from "../assets/images/uniforlogo.png";

const UniFor = () => {
  const cards = [
    {
      id: "formazione",
      icon: "🎓",
      title: "Corso di formazione CAF e Patronato",
      desc: "Percorsi per formare operatori qualificati in ambito fiscale e previdenziale. 🧑‍🏫",
    },
    {
      id: "A1",
      icon: "🗣️",
      title: "Corso di lingua livello A2",
      desc: "Livello base per la comunicazione e comprensione della lingua italiana. 🇮🇹",
    },
    {
      id: "B2",
      icon: "🗣️",
      title: "Corso di lingua livello B1",
      desc: "Livello avanzato necessario per lavoro, studio e cittadinanza italiana. 🇮🇹",
    },
    {
      id: "informatica",
      icon: "💻",
      title: "Corsi di informatica di base (Quadro EU)",
      desc: "Percorsi per apprendere le competenze digitali fondamentali. 💾",
    },
  ];

  const containerStyle = {
    maxWidth: "1200px",
    margin: "50px auto",
    padding: "0 20px",
  };

  const headerStyle = {
    textAlign: "center",
    padding: "20px 20px 10px",
    backgroundColor: "#059927ff",
  };

  const headerTitle = {
    fontSize: "3rem",
    marginBottom: "10px",
    color: "#fff",
  };

  const headerSubtitle = {
    fontSize: "1.2rem",
    color: "#f8f9fa",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.6,
  };

  const cardsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    cursor: "pointer",
    minHeight: "340px",
  };

  const cardIcon = { fontSize: "3.5rem", marginBottom: "15px" };
  const cardTitle = {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#003366",
    marginBottom: "12px",
  };
  const cardText = {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  const loginButtonStyle = {
    backgroundColor: "#059927",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  };

  return (
    <div>
      <TopBar />
      <MainMenu />

      {/* Header */}
      <header style={headerStyle}>
        <img
          src={uniforLogo}
          alt="UniFor Logo"
          style={{ height: "220px", marginBottom: "5px" }}
        />
        <h1 style={headerTitle}>Servizi UniFor</h1>
        <p style={headerSubtitle}>
          Percorsi formativi per operatori CAF e Patronato e corsi professionali riconosciuti.
        </p>
      </header>

      {/* Cards */}
      <div style={containerStyle}>
        <div style={cardsContainer}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={cardStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(-8px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                })
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(0)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                })
              }
            >
              <div style={cardIcon}>{card.icon}</div>
              <h2 style={cardTitle}>{card.title}</h2>
              <p style={cardText}>{card.desc}</p>
              <Link to={`/login/${card.id}`} style={loginButtonStyle}>
                Login
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UniFor;
