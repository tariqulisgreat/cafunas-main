import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const UniForDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesContent = {
    formazione: {
      title: "🎓 Corso di formazione CAF e Patronato",
      description: `Percorsi per formare operatori qualificati in ambito fiscale e previdenziale. 🧑‍🏫
Utili per chi vuole lavorare in CAF o Patronato.
Con rilascio di attestato professionale.`
    },
    lingua: {
      title: "🗣️ Corsi ed esami di lingua italiana A2 e B1",
      description: `Necessari per permessi di soggiorno UE e cittadinanza italiana. 🇮🇹
Aiutano a migliorare comunicazione e integrazione.
Prevedono anche la preparazione all’esame ufficiale.`
    },
    informatica: {
      title: "💻 Corsi di informatica di base (Quadro EU)",
      description: `Percorsi per apprendere le competenze digitali fondamentali. 💾
Utili per lavoro come nel CAF, scuola e vita quotidiana.
Riconosciuti secondo standard europei. 🌍`
    }
  };

  const service = servicesContent[serviceId];

  if (!service) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <TopBar />
        <MainMenu />
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Servizio non trovato.</p>
        <Footer />
      </div>
    );
  }

  const containerStyle = { maxWidth: "900px", margin: "50px auto", padding: "0 20px" };
  const backButtonStyle = {
    display: "inline-block",
    marginBottom: "30px",
    padding: "10px 20px",
    backgroundColor: "#003366",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "600",
  };
  const headerTitle = { fontSize: "2.5rem", color: "#003366", marginBottom: "20px" };
  const headerDesc = { fontSize: "1.1rem", color: "#333", whiteSpace: "pre-line", lineHeight: "1.8" };

  return (
    <div>
      <TopBar />
      <MainMenu />

      <div style={containerStyle}>
        {/* Back button */}
        <div style={backButtonStyle} onClick={() => navigate("/unifor")}>
          ← Torna ai servizi UniFor
        </div>

        {/* Service content */}
        <header>
          <h1 style={headerTitle}>{service.title}</h1>
          <p style={headerDesc}>{service.description}</p>
        </header>
      </div>

      <Footer />
    </div>
  );
};

export default UniForDetail;
