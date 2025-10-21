import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const ImmigrazioneDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesContent = {
    permessi_soggiorno: {
      title: "🛂 Permessi di soggiorno",
      description: `Pratiche per rilascio, rinnovo o aggiornamento dei permessi di soggiorno. 📄 Fondamentali per vivere e lavorare regolarmente in Italia.\nIl Patronato assiste nella compilazione dei moduli e appuntamenti in Questura.`
    },
    ricongiungimento: {
      title: "👨‍👩‍👧 Ricongiungimento Familiare",
      description: `Procedura per far arrivare in Italia i familiari da Paesi esteri. ✈️ Richiede documentazione specifica e tempi burocratici.\nIl CAF segue ogni fase per ridurre errori e ritardi.`
    },
    decreto_flussi: {
      title: "📜 Decreto Flussi",
      description: `Strumento con cui il Governo stabilisce quote di ingresso per lavoratori stranieri. 🧑‍🏭\nIl Patronato assiste nel presentare la domanda per lavoro subordinato o stagionale.\nServe per ottenere regolare permesso di soggiorno per motivi di lavoro.`
    },
    cittadinanza: {
      title: "🇮🇹 Cittadinanza italiana",
      description: `Può essere ottenuta per matrimonio, residenza o naturalizzazione. 📜\nRichiede documenti, certificati e spesso esami di lingua. 🗣️\nIl Patronato segue pratiche e invio telematico al Ministero.`
    },
    conversione_permessi: {
      title: "🔄 Conversione permessi",
      description: `Trasformazione di un permesso in un altro (es. studio → lavoro). 📚➡️💼\nServe per adattarsi a nuove situazioni personali o lavorative.\nIl Patronato cura la richiesta presso la Questura.`
    },
    carta_ue: {
      title: "🏛️ Carta di soggiorno UE",
      description: `Permesso di lungo soggiorno per chi risiede in Italia da almeno 5 anni. ⏳\nOffre più stabilità e meno limiti burocratici.\nRichiede reddito, alloggio e assenza di precedenti penali.`
    },
    visti_ingresso: {
      title: "✈️ Visti di ingresso",
      description: `Assistenza nella domanda di visti per turismo, studio o lavoro. 📄\nIl CAF supporta nella preparazione dei documenti richiesti dalle ambasciate.\nIndispensabile per un ingresso regolare in Italia.`
    },
    traduzioni_legalizzazioni: {
      title: "📜 Traduzioni e legalizzazioni",
      description: `Servizio per tradurre, asseverare e legalizzare atti ufficiali. 🖋️\nNecessari per pratiche di lavoro, studio o immigrazione.\nGarantisce conformità alle norme italiane ed estere.`
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
        <div
          style={backButtonStyle}
          onClick={() => navigate("/immigrazione")}
        >
          ← Torna ai servizi Immigrazione
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

export default ImmigrazioneDetail;
