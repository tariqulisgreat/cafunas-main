import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const Patronato = () => {
  const cards = [
    {
      icon: "💼",
      title: "NASPI ordinaria",
      desc: "Indennità di disoccupazione per chi ha perso involontariamente il lavoro. Il Patronato aiuta nella domanda e calcolo importo.",
      path: "naspi_ordinaria"
    },
    {
      icon: "🌾",
      title: "NASPI Agricola",
      desc: "Disoccupazione per lavoratori agricoli stagionali. Il Patronato gestisce domanda e documentazione INPS.",
      path: "naspi_agricola"
    },
    {
      icon: "👨‍👩‍👧",
      title: "Assegno Unico Universale",
      desc: "Sostegno economico per famiglie con figli fino a 21 anni. Il Patronato assiste nella richiesta e aggiornamenti annuali.",
      path: "assegno_unico"
    },
    {
      icon: "♿",
      title: "Invalidità Civile",
      desc: "Riconoscimento sanitario ed economico per chi ha ridotte capacità lavorative. Il Patronato segue domanda, visite e ricorsi.",
      path: "invalidita"
    },
    {
      icon: "🤰",
      title: "Maternità e Congedi parentali",
      desc: "Tutele per lavoratrici in gravidanza e genitori. Il Patronato prepara e invia la domanda all’INPS.",
      path: "maternita"
    },
    {
      icon: "📑",
      title: "Estratti contributivi",
      desc: "Documento che riepiloga i contributi versati all’INPS. Il Patronato assiste nella richiesta e verifica errori.",
      path: "estratti_contributivi"
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
        <h1 style={headerTitle}>Servizi Patronato</h1>
        <p style={headerSubtitle}>
          Ti assistiamo nella gestione delle pratiche di previdenza sociale in modo rapido e sicuro.
        </p>
      </header>

      {/* Cards */}
      <section style={cardsContainer}>
        {cards.map((card, index) => (
          <Link
            key={index}
            to={`/patronato/${card.path}`}
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

export default Patronato;
