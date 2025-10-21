import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const Immigrazione = () => {
  const cards = [
    {
      icon: "🛂",
      title: "Permessi di soggiorno",
      desc: "Pratiche per rilascio, rinnovo o aggiornamento dei permessi di soggiorno. 📄 Fondamentali per vivere e lavorare regolarmente in Italia. Il Patronato assiste nella compilazione dei moduli e appuntamenti in Questura.",
      path: "permessi_soggiorno"
    },
    {
      icon: "👨‍👩‍👧",
      title: "Ricongiungimento Familiare",
      desc: "Procedura per far arrivare in Italia i familiari da Paesi esteri. ✈️ Richiede documentazione specifica e tempi burocratici. Il CAF segue ogni fase per ridurre errori e ritardi.",
      path: "ricongiungimento"
    },
    {
      icon: "📜",
      title: "Decreto Flussi",
      desc: "Strumento con cui il Governo stabilisce quote di ingresso per lavoratori stranieri. 🧑‍🏭 Il Patronato assiste nel presentare la domanda per lavoro subordinato o stagionale. Serve per ottenere regolare permesso di soggiorno per motivi di lavoro.",
      path: "decreto_flussi"
    },
    {
      icon: "🇮🇹",
      title: "Cittadinanza italiana",
      desc: "Può essere ottenuta per matrimonio, residenza o naturalizzazione. 📜 Richiede documenti, certificati e spesso esami di lingua. 🗣️ Il Patronato segue pratiche e invio telematico al Ministero.",
      path: "cittadinanza"
    },
    {
      icon: "🔄",
      title: "Conversione permessi",
      desc: "Trasformazione di un permesso in un altro (es. studio → lavoro). 📚➡️💼 Serve per adattarsi a nuove situazioni personali o lavorative. Il Patronato cura la richiesta presso la Questura.",
      path: "conversione_permessi"
    },
    {
      icon: "🏛️",
      title: "Carta di soggiorno UE",
      desc: "Permesso di lungo soggiorno per chi risiede in Italia da almeno 5 anni. ⏳ Offre più stabilità e meno limiti burocratici. Richiede reddito, alloggio e assenza di precedenti penali.",
      path: "carta_ue"
    },
    {
      icon: "✈️",
      title: "Visti di ingresso",
      desc: "Assistenza nella domanda di visti per turismo, studio o lavoro. 📄 Il CAF supporta nella preparazione dei documenti richiesti dalle ambasciate. Indispensabile per un ingresso regolare in Italia.",
      path: "visti_ingresso"
    },
    {
      icon: "📜",
      title: "Traduzioni e legalizzazioni",
      desc: "Servizio per tradurre, asseverare e legalizzare atti ufficiali. 🖋️ Necessari per pratiche di lavoro, studio o immigrazione. Garantisce conformità alle norme italiane ed estere.",
      path: "traduzioni_legalizzazioni"
    },
  ];

  const headerStyle = { textAlign: "center", padding: "60px 20px 40px", backgroundColor: "#003366" };
  const headerTitle = { fontSize: "3rem", marginBottom: "10px", color: "#ffffffff" };
  const headerSubtitle = { fontSize: "1.2rem", color: "#ffffffff" };

  const cardsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns for 8 cards
    gap: "30px",
    maxWidth: "1400px",
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
    height: "320px",
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
        <h1 style={headerTitle}>Servizi Immigrazione</h1>
        <p style={headerSubtitle}>
          Ti assistiamo nella gestione di pratiche e documenti per cittadini stranieri in Italia.
        </p>
      </header>

      {/* Cards */}
      <section style={cardsContainer}>
        {cards.map((card, index) => (
          <Link
            key={index}
            to={`/immigrazione/${card.path}`}
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

export default Immigrazione;
