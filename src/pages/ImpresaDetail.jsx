import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const ImpresaDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Map of serviceId to detailed content
  const servicesContent = {
    contabilita: {
      title: "📚 Contabilità ordinaria e semplificata",
      description: `Gestione di registri contabili, fatture e adempimenti fiscali per aziende e professionisti. 📊
Il CAF supporta sia piccole attività che imprese strutturate. 💼
Permette di rispettare le scadenze e ottimizzare i costi.`
    },
    consulenza_fiscale: {
      title: "⚖️ Consulenza fiscale e tributaria",
      description: `Assistenza per interpretare le norme fiscali e ridurre i rischi con il fisco. 🏛️
Supporto su IVA, imposte dirette, deduzioni e agevolazioni. 💡
Indispensabile per pianificare la crescita dell’impresa. 🚀`
    },
    colf_badanti: {
      title: "👵 Colf / Badanti",
      description: `Gestione dei rapporti di lavoro domestico: contratti, buste paga e contributi. 🧹🤝
Il CAF assiste famiglie e lavoratori nelle pratiche INPS.
Garantisce rapporti regolari e tutelati.`
    },
    partita_iva: {
      title: "🧾 Apertura Partita IVA",
      description: `Supporto nell’apertura e nella scelta del regime fiscale più conveniente (forfettario, ordinario). 💼
Indispensabile per professionisti, freelance e nuove attività.
Il CAF gestisce pratiche e comunicazioni con l’Agenzia delle Entrate.`
    },
    dichiarazioni_iva: {
      title: "💰 Dichiarazioni IVA e modelli F24",
      description: `Compilazione e invio delle dichiarazioni IVA obbligatorie. 🧮
Calcolo e predisposizione dei modelli F24 per tasse e contributi. 📤
Servizio essenziale per chi ha Partita IVA.`
    },
    consulenza_startup: {
      title: "🚀 Consulenza start-up e nuove imprese",
      description: `Supporto per chi vuole avviare una nuova attività. 💡
Dalla scelta della forma giuridica alla gestione dei primi adempimenti fiscali.
Un aiuto concreto per trasformare un’idea in impresa. 💼`
    },
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
          onClick={() => navigate("/impresa")}
        >
          ← Torna ai servizi Impresa
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

export default ImpresaDetail;
