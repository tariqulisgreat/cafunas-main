import React, { useState } from "react";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const EVENTS = [
  {
    id: 1,
    title: "Conferenza Architettura Sostenibile",
    date: "12 Ottobre 2025",
    summary:
      "Un evento dedicato alle nuove tendenze dell'architettura eco-sostenibile e ai materiali innovativi.",
    image:
      "https://images.unsplash.com/photo-1503424886307-b090341d25d1?auto=format&fit=crop&w=1200&q=80",
    details:
      "La conferenza riunisce architetti, designer e ingegneri per discutere delle migliori pratiche nel campo della sostenibilità. Verranno presentati progetti che integrano energie rinnovabili e soluzioni green per le città del futuro.",
  },
  {
    id: 2,
    title: "Workshop Interior Design Moderno",
    date: "20 Novembre 2025",
    summary:
      "Un laboratorio pratico per esplorare lo stile minimal e le tendenze del design d’interni.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    details:
      "Durante il workshop, professionisti e studenti potranno collaborare a progetti di interior design moderni, utilizzando software 3D e mood board digitali per sviluppare idee innovative.",
  },
  {
    id: 3,
    title: "Evento Urbanistica e Spazi Pubblici",
    date: "5 Dicembre 2025",
    summary:
      "Un incontro per discutere il futuro degli spazi pubblici urbani e del loro impatto sociale.",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    details:
      "L’evento ospiterà architetti, urbanisti e sociologi per analizzare come la progettazione urbana possa favorire la comunità e migliorare la qualità della vita.",
  },
  {
    id: 4,
    title: "Mostra di Design e Innovazione",
    date: "18 Gennaio 2026",
    summary:
      "Esposizione dei progetti più creativi nel campo del design architettonico e tecnologico.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    details:
      "La mostra raccoglie concept innovativi nel mondo dell’architettura e del design. Gli espositori includono startup, studi affermati e giovani talenti emergenti.",
  },
];

const HIGHLIGHTS = [
  {
    title: "Smart Cities Forum 2026",
    date: "Febbraio 2026",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    text: "Scopri come la tecnologia sta ridefinendo le città intelligenti del futuro.",
  },
  {
    title: "Festival del Design Italiano",
    date: "Marzo 2026",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1200&q=80",
    text: "Celebriamo la creatività e il design made in Italy con installazioni e talk esclusivi.",
  },
];

const Eventi = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hovered, setHovered] = useState(null);

  const styles = {
    section: {
      padding: "60px 20px",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "10px",
      color: "#222",
      fontWeight: "700",
    },
    subheading: {
      color: "#666",
      marginBottom: "40px",
      fontSize: "1.1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      display: "block",
    },
    cardBody: {
      padding: "20px",
    },
    date: {
      color: "#0d6efd",
      fontSize: "0.9rem",
      fontWeight: "500",
      marginBottom: "8px",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#222",
    },
    summary: {
      color: "#555",
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      maxWidth: "600px",
      width: "90%",
      padding: "20px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
      textAlign: "left",
      position: "relative",
    },
    modalClose: {
      position: "absolute",
      top: "10px",
      right: "15px",
      fontSize: "1.4rem",
      cursor: "pointer",
      color: "#333",
      fontWeight: "bold",
    },
    modalImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    // highlight section
    highlight: {
      backgroundColor: "#fff",
      padding: "60px 20px",
      textAlign: "center",
    },
    highlightGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    highlightCard: {
      flex: "1 1 45%",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "left",
      backgroundColor: "#fdfdfd",
    },
    highlightImage: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
    },
    highlightBody: {
      padding: "20px",
    },
    // CTA
    cta: {
      backgroundColor: "#0d6efd",
      color: "#fff",
      textAlign: "center",
      padding: "60px 20px",
      marginTop: "60px",
    },
    ctaTitle: { fontSize: "2rem", marginBottom: "15px", fontWeight: "700" },
    ctaText: { fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 30px" },
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

      <section style={styles.section}>
        <h2 style={styles.heading}>Eventi</h2>
        <p style={styles.subheading}>
          Partecipa ai nostri eventi, workshop e conferenze per scoprire le ultime tendenze nel mondo dell'architettura e del design.
        </p>

        <div style={styles.grid}>
          {EVENTS.map((event) => (
            <div
              key={event.id}
              style={{
                ...styles.card,
                ...(hovered === event.id ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(event.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.image}
                alt={event.title}
                style={styles.image}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x400?text=Image+Not+Available")
                }
              />
              <div style={styles.cardBody}>
                <div style={styles.date}>{event.date}</div>
                <h3 style={styles.title}>{event.title}</h3>
                <p style={styles.summary}>{event.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div
            style={styles.modalOverlay}
            onClick={() => setSelectedEvent(null)}
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                style={styles.modalClose}
                onClick={() => setSelectedEvent(null)}
              >
                ×
              </span>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                style={styles.modalImage}
              />
              <h3 style={styles.title}>{selectedEvent.title}</h3>
              <div style={styles.date}>{selectedEvent.date}</div>
              <p style={styles.summary}>{selectedEvent.details}</p>
            </div>
          </div>
        )}
      </section>

      {/* HIGHLIGHTS */}
      <section style={styles.highlight}>
        <h2 style={styles.heading}>Prossimi Highlights</h2>
        <div style={styles.highlightGrid}>
          {HIGHLIGHTS.map((item, index) => (
            <div key={index} style={styles.highlightCard}>
              <img src={item.image} alt={item.title} style={styles.highlightImage} />
              <div style={styles.highlightBody}>
                <h3 style={styles.title}>{item.title}</h3>
                <div style={styles.date}>{item.date}</div>
                <p style={styles.summary}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Unisciti alla Nostra Community</h2>
        <p style={styles.ctaText}>
          Rimani aggiornato sui prossimi eventi, workshop e notizie esclusive
          del mondo dell’architettura. Iscriviti ora alla nostra newsletter!
        </p>
        <button style={styles.ctaButton}>Iscriviti Ora</button>
      </section>

      <Footer />
    </>
  );
};

export default Eventi;