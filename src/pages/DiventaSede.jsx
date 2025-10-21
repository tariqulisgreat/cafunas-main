import React from "react";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const DiventaSede = () => {
  const styles = {
    hero: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      textAlign: "center",
      padding: "100px 20px",
      fontFamily: "Arial, sans-serif",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "700",
      marginBottom: "20px",
      textShadow: "0 3px 8px rgba(0,0,0,0.5)",
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6",
      textShadow: "0 2px 6px rgba(0,0,0,0.4)",
    },
    section: {
      padding: "60px 20px",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
    },
    sectionTitle: {
      fontSize: "2.2rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#222",
    },
    sectionText: {
      fontSize: "1rem",
      color: "#555",
      maxWidth: "800px",
      margin: "0 auto 40px",
      lineHeight: "1.6",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "25px",
      textAlign: "left",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#0d6efd",
      marginBottom: "10px",
    },
    cardText: {
      fontSize: "0.95rem",
      color: "#555",
      lineHeight: "1.5",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    processSection: {
      backgroundColor: "#fff",
      padding: "60px 20px",
      textAlign: "center",
    },
    step: {
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      padding: "25px",
      margin: "15px auto",
      maxWidth: "700px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    },
    stepNumber: {
      fontSize: "1.6rem",
      fontWeight: "700",
      color: "#0d6efd",
      marginBottom: "10px",
    },
    stepText: {
      fontSize: "1rem",
      color: "#444",
      lineHeight: "1.5",
    },
    testimonials: {
      backgroundColor: "#f0f4ff",
      padding: "70px 20px",
      textAlign: "center",
    },
    testimonialGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    testimonialCard: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "25px",
      maxWidth: "320px",
      textAlign: "left",
      flex: "1 1 280px",
    },
    testimonialText: {
      color: "#555",
      fontSize: "0.95rem",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    testimonialName: {
      color: "#0d6efd",
      fontWeight: "600",
      fontSize: "1rem",
    },
    testimonialRole: {
      color: "#777",
      fontSize: "0.9rem",
    },
    cta: {
      backgroundColor: "#0d6efd",
      color: "#fff",
      textAlign: "center",
      padding: "70px 20px",
    },
    ctaTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "15px",
    },
    ctaText: {
      fontSize: "1.1rem",
      maxWidth: "700px",
      margin: "0 auto 30px",
    },
    ctaButton: {
      backgroundColor: "#fff",
      color: "#0d6efd",
      border: "none",
      padding: "12px 25px",
      borderRadius: "6px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <>
      <MainMenu />

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>DIVENTA NOSTRA SEDE</h1>
        <p style={styles.heroSubtitle}>
          Scopri come entrare a far parte del nostro network di sedi affiliate e
          condividere la nostra visione di innovazione, architettura e design
          sostenibile.
        </p>
      </section>

      {/* BENEFITS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Perché Diventare una Nostra Sede</h2>
        <p style={styles.sectionText}>
          Collaborare con noi significa entrare in una rete di professionisti
          dell’architettura e del design che condividono valori di qualità,
          sostenibilità e crescita reciproca.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Supporto professionale"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Supporto Professionale</h3>
            <p style={styles.cardText}>
              Offriamo assistenza continua e strumenti di gestione per
              semplificare le tue attività quotidiane e far crescere il tuo
              studio.
            </p>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Visibilità e marketing"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Visibilità e Marketing</h3>
            <p style={styles.cardText}>
              Promuoviamo la tua sede attraverso i nostri canali digitali e
              campagne mirate per aumentare la tua presenza sul territorio.
            </p>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Collaborazione e rete"
              style={styles.image}
            />
            <h3 style={styles.cardTitle}>Collaborazione e Rete</h3>
            <p style={styles.cardText}>
              Entrerai in contatto con una rete di professionisti e aziende
              partner per collaborazioni e progetti condivisi.
            </p>
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section style={styles.processSection}>
        <h2 style={styles.sectionTitle}>Come Diventare una Sede</h2>
        <div style={styles.step}>
          <div style={styles.stepNumber}>1️⃣</div>
          <p style={styles.stepText}>
            Compila il modulo di richiesta e raccontaci la tua esperienza e i
            tuoi obiettivi professionali.
          </p>
        </div>
        <div style={styles.step}>
          <div style={styles.stepNumber}>2️⃣</div>
          <p style={styles.stepText}>
            Partecipa a un incontro conoscitivo con il nostro team di sviluppo
            sedi.
          </p>
        </div>
        <div style={styles.step}>
          <div style={styles.stepNumber}>3️⃣</div>
          <p style={styles.stepText}>
            Una volta approvata la tua candidatura, riceverai il kit di
            benvenuto e potrai iniziare subito la collaborazione.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>Testimonianze delle Sedi Partner</h2>
        <p style={styles.sectionText}>
          Scopri cosa dicono i nostri partner che hanno già scelto di far parte
          del network.
        </p>

        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Collaborare con questa rete ha rivoluzionato il nostro modo di
              lavorare. Abbiamo ricevuto supporto costante e nuove
              opportunità.”
            </p>
            <div style={styles.testimonialName}>Luca Bianchi</div>
            <div style={styles.testimonialRole}>Studio Bianchi Design</div>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Un'esperienza professionale straordinaria! La visibilità del mio
              studio è aumentata e ho conosciuto partner di alto livello.”
            </p>
            <div style={styles.testimonialName}>Chiara Rossi</div>
            <div style={styles.testimonialRole}>Rossi Architettura</div>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Entrare a far parte del network è stata la decisione migliore per
              la mia carriera. Consigliato a chiunque voglia crescere
              professionalmente.”
            </p>
            <div style={styles.testimonialName}>Marco Esposito</div>
            <div style={styles.testimonialRole}>Esposito Studio Creativo</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Vuoi Far Parte del Nostro Network?</h2>
        <p style={styles.ctaText}>
          Invia oggi la tua candidatura e diventa una delle nostre sedi
          ufficiali. Cresci insieme a noi e porta la nostra filosofia nella tua
          città.
        </p>
        <button style={styles.ctaButton}>Candidati Ora</button>
      </section>

      <Footer />
    </>
  );
};

export default DiventaSede;
