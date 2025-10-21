import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const CAF = () => {
  const cards = [
    { icon: "📑", title: "ISEE", cos: "Indicatore per accedere a bonus e agevolazioni.", gestione: "Calcolo e invio all’INPS.", path: "isee" },
    { icon: "🧾", title: "730", cos: "Dichiarazione dei redditi per dipendenti/pensionati.", gestione: "Compilazione e invio, rimborsi in busta paga.", path: "730" },
    { icon: "📘", title: "UNICO", cos: "Dichiarazione dei redditi per autonomi e partite IVA.", gestione: "Preparazione modello e invio all’Agenzia Entrate.", path: "unico" },
    { icon: "🧮", title: "RED", cos: "Comunicazione redditi pensionati all’INPS.", gestione: "Compilazione e invio online.", path: "red" },
    { icon: "🏠", title: "IMU", cos: "Tassa comunale sulla proprietà di case e terreni.", gestione: "Calcolo e preparazione modello F24.", path: "imu" },
    { icon: "🏢", title: "TASI / TARI", cos: "TASI: tassa servizi indivisibili, TARI: tassa sui rifiuti.", gestione: "Calcolo e compilazione moduli comunali.", path: "tasi_tari" },
    { icon: "⚖️", title: "Dichiarazioni di successione", cos: "Documento fiscale da presentare dopo un decesso.", gestione: "Pagamento imposte e registrazione passaggio beni.", path: "successione" },
    { icon: "🏘️", title: "Dichiarazioni di locazione", cos: "Pratiche per registrazione e gestione contratti affitto.", gestione: "Cedolare secca, rinnovi, proroghe, cessioni, risoluzioni.", path: "locazione" },
    { icon: "💡", title: "Bonus fiscali", cos: "Agevolazioni economiche per ridurre spese familiari.", gestione: "Richiedibili solo con ISEE aggiornato.", path: "bonus" },
    { icon: "📄", title: "Certificazione Unica (CU)", cos: "Documento che riporta i redditi percepiti.", gestione: "Rilasciato da datore di lavoro, INPS o CAF.", path: "cu" },
  ];

  // Inline styles
  const headerStyle = { textAlign: "center", padding: "60px 20px 40px", backgroundColor: "#003366" };
  const headerTitle = { fontSize: "3rem", marginBottom: "10px", color: "#ffffffff" };
  const headerSubtitle = { fontSize: "1.2rem", color: "#ffffffff" };

  const cardsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    cursor: "pointer",
    height: "220px",
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
        <h1 style={headerTitle}>Servizi CAF</h1>
        <p style={headerSubtitle}>Ti assistiamo nella gestione delle pratiche fiscali in modo rapido e sicuro.</p>
      </header>

      {/* Cards */}
      <section style={cardsContainer}>
        {cards.map((card, index) => (
          <Link
            key={index}
            to={`/caf/${card.path}`}
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
              <p style={cardText}>{card.cos}</p>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default CAF;
