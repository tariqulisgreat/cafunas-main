import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const Impresa = () => {
  const cards = [
    {
      icon: "📚",
      title: "Contabilità ordinaria e semplificata",
      desc: "Gestione di registri contabili, fatture e adempimenti fiscali per aziende e professionisti. Il CAF supporta sia piccole attività che imprese strutturate.",
      path: "contabilita"
    },
    {
      icon: "⚖️",
      title: "Consulenza fiscale e tributaria",
      desc: "Assistenza per interpretare le norme fiscali e ridurre i rischi con il fisco. Supporto su IVA, imposte dirette, deduzioni e agevolazioni.",
      path: "consulenza_fiscale"
    },
    {
      icon: "👵",
      title: "Colf / Badanti",
      desc: "Gestione dei rapporti di lavoro domestico: contratti, buste paga e contributi. Il CAF assiste famiglie e lavoratori nelle pratiche INPS.",
      path: "colf_badanti"
    },
    {
      icon: "🧾",
      title: "Apertura Partita IVA",
      desc: "Supporto nell’apertura e nella scelta del regime fiscale più conveniente. Il CAF gestisce pratiche e comunicazioni con l’Agenzia delle Entrate.",
      path: "partita_iva"
    },
    {
      icon: "💰",
      title: "Dichiarazioni IVA e modelli F24",
      desc: "Compilazione e invio delle dichiarazioni IVA obbligatorie. Calcolo e predisposizione dei modelli F24 per tasse e contributi.",
      path: "dichiarazioni_iva"
    },
    {
      icon: "🚀",
      title: "Consulenza start-up e nuove imprese",
      desc: "Supporto per chi vuole avviare una nuova attività. Dalla scelta della forma giuridica alla gestione dei primi adempimenti fiscali.",
      path: "consulenza_startup"
    },
  ];

  // Inline styles
  const headerStyle = { textAlign: "center", padding: "60px 20px 40px", backgroundColor: "#003366" };
  const headerTitle = { fontSize: "3rem", marginBottom: "10px", color: "#ffffffff" };
  const headerSubtitle = { fontSize: "1.2rem", color: "#ffffffff" };

  const cardsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    cursor: "pointer",
    height: "280px", // uniform height
  };

  const cardHover = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  };

  const cardIcon = { fontSize: "3.5rem", marginBottom: "15px" };
  const cardTitle = { fontSize: "1.2rem", fontWeight: "600", color: "#003366", marginBottom: "10px" };
  const cardText = { fontSize: "0.95rem", color: "#555", lineHeight: "1.4" };

  return (
    <div>
      <TopBar />
      <MainMenu />

      {/* Header */}
      <header style={headerStyle}>
        <h1 style={headerTitle}>Servizi Impresa</h1>
        <p style={headerSubtitle}>
          Ti assistiamo nella gestione fiscale e contabile della tua impresa in modo rapido e sicuro.
        </p>
      </header>

      {/* Cards */}
      <section style={cardsContainer}>
        {cards.map((card, index) => (
          <Link
            key={index}
            to={`/impresa/${card.path}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={cardStyle}
              onMouseEnter={e => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={e =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(0)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                })
              }
            >
              <div style={cardIcon}>{card.icon}</div>
              <h2 style={cardTitle}>{card.title}</h2>
              <p style={cardText}>{card.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Impresa;
