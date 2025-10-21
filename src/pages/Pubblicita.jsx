import React from "react";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const Pubblicita = () => {
  const styles = {
    hero: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      textAlign: "center",
      padding: "120px 20px",
      fontFamily: "Poppins, sans-serif",
      position: "relative",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.55)",
      zIndex: 0,
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
      maxWidth: "900px",
      margin: "0 auto",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "700",
      marginBottom: "20px",
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      lineHeight: "1.7",
      maxWidth: "750px",
      margin: "0 auto",
    },
    section: {
      padding: "80px 20px",
      textAlign: "center",
      backgroundColor: "#fff",
    },
    sectionAlt: {
      padding: "80px 20px",
      textAlign: "center",
      backgroundColor: "#f7f9fc",
    },
    sectionTitle: {
      fontSize: "2.2rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#111",
    },
    sectionText: {
      fontSize: "1rem",
      color: "#555",
      maxWidth: "850px",
      margin: "0 auto 40px",
      lineHeight: "1.7",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardBody: {
      padding: "25px",
      textAlign: "left",
    },
    cardTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#0d6efd",
      marginBottom: "10px",
    },
    cardText: {
      color: "#555",
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
    portfolio: {
      backgroundColor: "#f0f4ff",
      padding: "80px 20px",
      textAlign: "center",
    },
    portfolioGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    portfolioItem: {
      borderRadius: "12px",
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    portfolioImage: {
      width: "100%",
      height: "240px",
      objectFit: "cover",
    },
    portfolioOverlay: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0,0,0,0.6)",
      color: "#fff",
      padding: "15px",
      textAlign: "center",
      fontWeight: "500",
    },
    testimonials: {
      backgroundColor: "#fff",
      padding: "80px 20px",
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
      backgroundColor: "#f9fafc",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      padding: "25px",
      maxWidth: "320px",
      flex: "1 1 280px",
      textAlign: "left",
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
      padding: "80px 20px",
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
      lineHeight: "1.7",
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
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>PUBBLICITÀ</h1>
          <p style={styles.heroSubtitle}>
            Servizi pubblicitari per dare visibilità alla tua attività e
            costruire un’immagine forte con strategie creative e mirate.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>I Nostri Servizi Pubblicitari</h2>
        <p style={styles.sectionText}>
          Offriamo soluzioni complete per promuovere la tua attività — dalla
          strategia di comunicazione alla realizzazione di campagne digitali e
          materiali visivi professionali.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
              alt="Digital Marketing"
              style={styles.cardImage}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>Marketing Digitale</h3>
              <p style={styles.cardText}>
                Strategie social media, SEO e campagne Google Ads per aumentare
                la tua visibilità online e generare contatti reali.
              </p>
            </div>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Brand Identity"
              style={styles.cardImage}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>Brand Identity</h3>
              <p style={styles.cardText}>
                Creiamo loghi, grafiche e materiali pubblicitari che rispecchiano
                la tua identità e comunicano i tuoi valori.
              </p>
            </div>
          </div>

          <div style={styles.card}>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Advertising Visuals"
              style={styles.cardImage}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>Pubblicità Visiva</h3>
              <p style={styles.cardText}>
                Spot video, cartelloni, brochure e grafiche per eventi con uno
                stile accattivante e professionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section style={styles.portfolio}>
        <h2 style={styles.sectionTitle}>Alcuni dei Nostri Progetti</h2>
        <p style={styles.sectionText}>
          Ecco alcuni esempi delle campagne pubblicitarie realizzate per i nostri
          clienti.
        </p>

        <div style={styles.portfolioGrid}>
          <div style={styles.portfolioItem}>
            <img
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80"
              alt="Campaign Example"
              style={styles.portfolioImage}
            />
            <div style={styles.portfolioOverlay}>
              Campagna Social – Green Living
            </div>
          </div>

          <div style={styles.portfolioItem}>
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80"
              alt="Advertising Design"
              style={styles.portfolioImage}
            />
            <div style={styles.portfolioOverlay}>Design Brochure – ArchiExpo</div>
          </div>

          <div style={styles.portfolioItem}>
            <img
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80"
              alt="Billboard Design"
              style={styles.portfolioImage}
            />
            <div style={styles.portfolioOverlay}>
              Billboard Creativo – Urban Vision
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>Cosa Dicono i Nostri Clienti</h2>
        <p style={styles.sectionText}>
          La soddisfazione dei nostri clienti è la nostra migliore pubblicità.
        </p>

        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Grazie al loro supporto, la nostra azienda ha raggiunto risultati
              incredibili in pochi mesi.”
            </p>
            <div style={styles.testimonialName}>Andrea Verdi</div>
            <div style={styles.testimonialRole}>CEO - Studio Verde</div>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Un team creativo e attento. Hanno trasformato il nostro brand in
              un marchio riconoscibile.”
            </p>
            <div style={styles.testimonialName}>Sara Romano</div>
            <div style={styles.testimonialRole}>Direttrice - EventItalia</div>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              “Campagne di grande impatto e risultati tangibili. Consigliatissimi!”
            </p>
            <div style={styles.testimonialName}>Giulio De Luca</div>
            <div style={styles.testimonialRole}>Fondatore - ArtVibe</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Dai Voce alla Tua Attività!</h2>
        <p style={styles.ctaText}>
          Contattaci oggi per creare la tua prossima campagna pubblicitaria e
          rendere il tuo brand indimenticabile.
        </p>
        <button style={styles.ctaButton}>Richiedi una Consulenza</button>
      </section>

      <Footer />
    </>
  );
};

export default Pubblicita;
