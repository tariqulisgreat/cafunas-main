import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const CAFDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Map of serviceId to content
  const servicesContent = {
    isee: {
      title: "🧾 ISEE (Indicatore della Situazione Economica Equivalente)",
      description: `L’ISEE è un documento fondamentale per accedere a prestazioni sociali agevolate come bonus, sussidi, asili nido, mense scolastiche e borse di studio. 📚💡
Calcola la situazione economica del nucleo familiare considerando redditi, patrimoni e composizione della famiglia. 👨‍👩‍👧‍👦
Senza l’ISEE non è possibile ottenere agevolazioni economiche statali o comunali.`
    },
    "730": {
      title: "📊 Modello 730",
      description: `È la dichiarazione dei redditi destinata principalmente a lavoratori dipendenti e pensionati. 👔👵
Permette di ottenere i rimborsi direttamente in busta paga o sulla pensione. 💶
È più semplice e rapido rispetto al modello Unico e riduce il rischio di errori.`
    },
    unico: {
      title: "📑 Modello Unico / Redditi Persone Fisiche",
      description: `È la dichiarazione dei redditi per chi non può utilizzare il modello 730. 📘
Obbligatorio per lavoratori autonomi, titolari di partita IVA o chi ha redditi complessi. 💼
Permette di dichiarare tutti i redditi percepiti nell’anno, inclusi esteri. 🌍`
    },
    red: {
      title: "📝 RED (Dichiarazioni reddituali INPS)",
      description: `Documento richiesto dall’INPS per i pensionati che ricevono prestazioni collegate al reddito. 🧓
Serve a confermare i requisiti per continuare a ricevere integrazioni, maggiorazioni o assegni familiari. 📩
Se non presentato, si rischia la sospensione della pensione. 🚫`
    },
    imu: {
      title: "🏠 IMU (Imposta Municipale Unica)",
      description: `È la tassa comunale sulla proprietà di case, terreni e immobili. 🏡
Il CAF calcola l’importo e prepara il modello F24 per il pagamento. 📄
Obbligatoria per i proprietari di immobili diversi dalla prima casa.`
    },
    tasi_tari: {
      title: "🏢 TASI / TARI",
      description: `• TASI: tassa sui servizi indivisibili (illuminazione stradale, sicurezza, ecc.). 💡
• TARI: tassa sui rifiuti, obbligatoria per chiunque occupi un immobile. 🚮
Il CAF assiste nel calcolo e nella compilazione dei moduli comunali. 🏛️`
    },
    successione: {
      title: "⚖️ Dichiarazioni di successione",
      description: `Documento fiscale da presentare dopo un decesso per dichiarare il trasferimento dei beni agli eredi. ⚰️👪
Serve per pagare eventuali imposte di successione e registrare il passaggio di proprietà di immobili. 🏠
È un adempimento obbligatorio presso l’Agenzia delle Entrate.`
    },
    locazione: {
      title: "🏘️ Dichiarazioni di locazione",
      description: `Pratiche per la registrazione e gestione dei contratti di affitto. 📜
Si può scegliere la cedolare secca, un’imposta agevolata al posto delle tasse tradizionali. 💶
Include rinnovi, proroghe, cessioni e risoluzioni.`
    },
    bonus: {
      title: "💡 Bonus fiscali",
      description: `Agevolazioni economiche che riducono le spese familiari (bonus luce, gas, acqua, affitti, sociali). 🔌💧
Richiedibili solo con ISEE aggiornato.
Servono per alleggerire le bollette e migliorare il bilancio familiare.`
    },
    cu: {
      title: "📄 Certificazione Unica (CU)",
      description: `Documento che riporta i redditi percepiti (stipendio, pensione, collaborazioni). 📂
Serve per fare la dichiarazione dei redditi o per dimostrare i propri guadagni. 💼
Viene rilasciato dal datore di lavoro, dall’INPS o tramite CAF.`
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
  const headerStyle = {
    textAlign: "center",
    padding: "60px 20px 40px",
    backgroundColor: "#f7f7f7"
  };
  const headerTitle = { fontSize: "2.5rem", color: "#003366", marginBottom: "20px" };
  const headerDesc = { fontSize: "1.1rem", color: "#333", whiteSpace: "pre-line", lineHeight: "1.8" };

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

  return (
    <div>
      <TopBar />
      <MainMenu />

      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "0 20px" }}>
        {/* Back button */}
        <div
          style={backButtonStyle}
          onClick={() => navigate("/caf")}
        >
          ← Torna ai servizi CAF
        </div>

        {/* Service content */}
        <header style={headerStyle}>
          <h1 style={headerTitle}>{service.title}</h1>
          <p style={headerDesc}>{service.description}</p>
        </header>
      </div>

      <Footer />
    </div>
  );
};

export default CAFDetail;
