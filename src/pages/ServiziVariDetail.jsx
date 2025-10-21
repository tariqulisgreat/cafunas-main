import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const ServiziVariDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesContent = {
    spid: {
      title: "🔐 SPID",
      description: `Identità digitale per accedere ai servizi online della Pubblica Amministrazione. 🖥️
Necessario per INPS, Agenzia delle Entrate, sanità e scuola.
Il CAF aiuta nel rilascio e nella gestione.`
    },
    pec: {
      title: "📧 PEC (Posta Elettronica Certificata)",
      description: `È l’equivalente digitale di una raccomandata con ricevuta di ritorno. 📮
Obbligatoria per aziende e professionisti.
Il CAF assiste nell’attivazione e configurazione.`
    },
    "firma-digitale": {
      title: "✍️ Firma digitale",
      description: `Strumento elettronico con valore legale per firmare documenti online. 🖊️
Indispensabile per contratti, gare, pratiche aziendali.
Il CAF fornisce attivazione e supporto tecnico.`
    },
    fatture: {
      title: "🧾 Fatture elettroniche",
      description: `Emissione e gestione delle fatture obbligatorie per imprese e professionisti. 💼
Il CAF supporta nella creazione e invio tramite sistemi autorizzati.
Permette di essere in regola con le normative fiscali.`
    },
    visure: {
      title: "📜 Visure camerali e catastali",
      description: `Certificati ufficiali sulla situazione delle aziende e degli immobili. 🏢🏠
Richiesti per contratti, mutui o controlli fiscali.
Il CAF li ottiene direttamente dalle Camere di Commercio e dal Catasto.`
    },
    "certificati-anagrafici": {
      title: "🏛️ Certificati anagrafici online",
      description: `Documenti come nascita, residenza, stato civile, disponibili in formato digitale. 📄
Utili per pratiche amministrative e legali.
Il CAF assiste nella richiesta online senza recarsi in Comune.`
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
        <div style={backButtonStyle} onClick={() => navigate("/servizi-vari")}>
          ← Torna ai Servizi Vari
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

export default ServiziVariDetail;
