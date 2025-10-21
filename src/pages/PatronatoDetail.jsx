import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const PatronatoDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Map of serviceId to detailed content
  const servicesContent = {
    naspi_ordinaria: {
      title: "💼 NASPI ordinaria",
      description: `È l’indennità di disoccupazione per chi ha perso involontariamente il lavoro. ❌👔
Viene erogata mensilmente dall’INPS e serve come sostegno al reddito. 💶
Il Patronato aiuta nella domanda e nel calcolo della durata e importo spettante. 📩`
    },
    naspi_agricola: {
      title: "🌾 NASPI Agricola",
      description: `È la disoccupazione destinata ai lavoratori agricoli stagionali. 🌱
Spetta a chi ha lavorato in agricoltura nell’anno precedente e ha perso l’impiego. 👨‍🌾
Il Patronato gestisce domanda e documentazione INPS.`
    },
    assegno_unico: {
      title: "👨‍👩‍👧 Assegno Unico Universale",
      description: `Sostegno economico per tutte le famiglie con figli a carico fino a 21 anni. 👶📚
L’importo varia in base al reddito (ISEE) e al numero dei figli. 💶
Il Patronato assiste nella richiesta e negli aggiornamenti annuali.`
    },
    invalidita: {
      title: "♿ Invalidità Civile",
      description: `È un riconoscimento sanitario ed economico per chi ha ridotte capacità lavorative. 🏥
Permette di ottenere pensioni, esenzioni sanitarie e agevolazioni lavorative. ⚖️
Il Patronato segue domanda, visite mediche e ricorsi.`
    },
    maternita: {
      title: "🤰 Maternità e Congedi parentali",
      description: `Tutele per lavoratrici in gravidanza e genitori che si occupano dei figli. 👩‍🍼👨‍🍼
Prevedono indennità economiche e periodi di astensione dal lavoro. ⏳
Il Patronato prepara e invia la domanda all’INPS.`
    },
    estratti_contributivi: {
      title: "📑 Estratti contributivi",
      description: `Documento che riepiloga i contributi versati all’INPS durante la vita lavorativa. 🧾
Serve per controllare la posizione previdenziale e calcolare la futura pensione. 👴
Il Patronato assiste nella richiesta e nella verifica di eventuali errori.`
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

  // Inline styles
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
        <div
          style={backButtonStyle}
          onClick={() => navigate("/patronato")}
        >
          ← Torna ai servizi Patronato
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

export default PatronatoDetail;
