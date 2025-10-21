import React, { useState } from "react";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const PROJECTS = [
  {
    id: 1,
    title: "Ristrutturazione Residenziale",
    category: "Residenziale",
    summary: "Open-space living e design eco-sostenibile per un appartamento moderno.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Showroom Commerciale",
    category: "Commerciale",
    summary: "Spazio minimalista e luminoso per un brand di moda contemporanea.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Uffici Open Space",
    category: "Uffici",
    summary: "Ambiente collaborativo e flessibile con design acustico e funzionale.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Giardino Urbano",
    category: "Paesaggistica",
    summary: "Area verde sostenibile con percorsi accessibili e illuminazione LED.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
  }
];

const Progetti = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hovered, setHovered] = useState(null);

  const styles = {
    section: { padding: "60px 20px", backgroundColor: "#f8f9fa", textAlign: "center", fontFamily: "Arial, sans-serif" },
    heading: { fontSize: "2.5rem", marginBottom: "10px", color: "#222", fontWeight: "700" },
    subheading: { color: "#666", marginBottom: "40px", fontSize: "1.1rem" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", justifyContent: "center", maxWidth: "1200px", margin: "0 auto" },
    card: { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" },
    cardHover: { transform: "translateY(-5px)", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" },
    cardImage: { width: "100%", height: "200px", objectFit: "cover", display: "block" },
    cardBody: { padding: "20px" },
    cardTitle: { fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px", color: "#222" },
    cardCategory: { color: "#0d6efd", fontSize: "0.9rem", fontWeight: "500", marginBottom: "8px" },
    cardSummary: { color: "#555", fontSize: "0.95rem", lineHeight: "1.5" },
    modalOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 },
    modalContent: { backgroundColor: "#fff", borderRadius: "10px", maxWidth: "600px", width: "90%", padding: "20px", boxShadow: "0 6px 20px rgba(0,0,0,0.2)", textAlign: "left", position: "relative" },
    modalClose: { position: "absolute", top: "10px", right: "15px", fontSize: "1.4rem", cursor: "pointer", color: "#333", fontWeight: "bold" },
    modalImage: { width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" },
  };

  return (
    <>
      <MainMenu />

      <section style={styles.section}>
        <h2 style={styles.heading}>I Nostri Progetti</h2>
        <p style={styles.subheading}>Scopri alcuni dei nostri lavori più recenti e innovativi.</p>

        <div style={styles.grid}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              style={{ ...styles.card, ...(hovered === project.id ? styles.cardHover : {}) }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                style={styles.cardImage}
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Available")}
              />
              <div style={styles.cardBody}>
                <div style={styles.cardCategory}>{project.category}</div>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardSummary}>{project.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div style={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span style={styles.modalClose} onClick={() => setSelectedProject(null)}>×</span>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={styles.modalImage}
                onError={(e) => (e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Available")}
              />
              <h3 style={styles.cardTitle}>{selectedProject.title}</h3>
              <div style={styles.cardCategory}>{selectedProject.category}</div>
              <p style={styles.cardSummary}>{selectedProject.summary}</p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Progetti;
