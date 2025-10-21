import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const ServiziVari = () => {
  const cards = [
    {
      id: "spid",
      icon: "🔐",
      title: "SPID",
      desc: "Identità digitale per accedere ai servizi online della Pubblica Amministrazione. 🖥️"
    },
    {
      id: "pec",
      icon: "📧",
      title: "PEC (Posta Elettronica Certificata)",
      desc: "È l’equivalente digitale di una raccomandata con ricevuta di ritorno. 📮"
    },
    {
      id: "firma-digitale",
      icon: "✍️",
      title: "Firma digitale",
      desc: "Strumento elettronico con valore legale per firmare documenti online. 🖊️"
    },
    {
      id: "fatture",
      icon: "🧾",
      title: "Fatture elettroniche",
      desc: "Emissione e gestione delle fatture obbligatorie per imprese e professionisti. 💼"
    },
    {
      id: "visure",
      icon: "📜",
      title: "Visure camerali e catastali",
      desc: "Certificati ufficiali sulla situazione delle aziende e degli immobili. 🏢🏠"
    },
    {
      id: "certificati-anagrafici",
      icon: "🏛️",
      title: "Certificati anagrafici online",
      desc: "Documenti come nascita, residenza, stato civile, disponibili in formato digitale. 📄"
    }
  ];

  const containerStyle = { maxWidth: "1200px", margin: "50px auto", padding: "0 20px" };
  const headerStyle = { textAlign: "center", padding: "60px 20px 40px", backgroundColor: "#003366" };
  const headerTitle = { fontSize: "3rem", marginBottom: "10px", color: "#ffffffff" };
  const headerSubtitle = { fontSize: "1.2rem", color: "#ffffffff" };

  const cardsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    cursor: "pointer",
    height: "320px",
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
        <h1 style={headerTitle}>Servizi Vari</h1>
        <p style={headerSubtitle}>
          Servizi digitali e amministrativi per privati e aziende, gestiti dal CAF.
        </p>
      </header>

      {/* Cards */}
      <div style={containerStyle}>
        <div style={cardsContainer}>
          {cards.map((card) => (
            <Link
              key={card.id}
              to={`/servizi-vari/${card.id}`}
              style={cardStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                })
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(0)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                })
              }
            >
              <div style={cardIcon}>{card.icon}</div>
              <h2 style={cardTitle}>{card.title}</h2>
              <p style={cardText}>{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiziVari;
