import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const styles = {
    footer: {
      width: "100%",
      backgroundColor: "#008000", // Green background
      color: "#fff",
      padding: "30px 20px", // reduced from 50px
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    container: {
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px", // reduced from 30px
    },
    section: {
      flex: "1 1 250px",
      display: "flex",
      flexDirection: "column",
      gap: "10px", // reduced gap
    },
    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      marginBottom: "5px", // reduced margin
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "0.9rem", // smaller font
    },
    socialIcons: {
      display: "flex",
      gap: "12px", // smaller gap
      marginTop: "10px",
      flexWrap: "wrap",
    },
    icon: {
      fontSize: "1.1rem", // slightly smaller
      cursor: "pointer",
      transition: "transform 0.2s ease",
    },
    button: {
      marginTop: "10px",
      padding: "10px 20px", // smaller button
      backgroundColor: "#8B0000", // Deep red
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "0.95rem",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#FF6347", // Light red
    },
    linkItem: {
      fontSize: "0.9rem",
      cursor: "pointer",
      transition: "color 0.2s ease",
    },
    newsItem: {
      fontSize: "0.9rem",
      lineHeight: "1.3", // tighter line spacing
    },
    footerBottom: {
      marginTop: "20px", // reduced from 30px
      width: "100%",
      textAlign: "center",
      fontSize: "0.85rem",
      borderTop: "1px solid rgba(255,255,255,0.3)",
      paddingTop: "10px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT: CONTACT INFO */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contatti</h3>
          <p style={styles.contactItem}><FaPhoneAlt /> +39 350 881 6335</p>
          <p style={styles.contactItem}><FaEnvelope /> unas.vicenza@gmail.com</p>
          <p style={styles.contactItem}><FaMapMarkerAlt />Sede Principale: Via Quinto Sella 79
36100  Vicenza(VI)
ITALIAy</p>

          <div style={styles.socialIcons}>
            <FaFacebookF style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaTwitter style={styles.icon} />
            <FaYoutube style={styles.icon} />
            <FaLinkedinIn style={styles.icon} />
            <FaWhatsapp style={styles.icon} />
          </div>

          <button
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          >
            Iscriviti
          </button>
        </div>

        {/* MIDDLE: LINKS */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Link Utili</h3>
          <p style={styles.linkItem}>I nostri progetti</p>
          <p style={styles.linkItem}>Chi Siamo</p>
          <p style={styles.linkItem}>I nostri servizi</p>
          <p style={styles.linkItem}>Eventi</p>
        </div>

        {/* RIGHT: NEWS */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Ultime Notizie</h3>
          <p style={styles.newsItem}>Compravendite immobiliari: online i dati del secondo trimestre 2025. Crescono gli scambi di abitazioni: +8,1% rispetto allo scorso anno (comunicato stampa) Settembre 11, 2025</p>
          <p style={styles.newsItem}>Società in amministrazione straordinaria. Firmato il protocollo di intesa Entrate-Fintecna per procedure più veloci (comunicato stampa) Settembre 10, 2025</p>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div style={styles.footerBottom}>
        <p>
          © Copyright 2025 - Caf Unas &nbsp;|&nbsp;
          <span>Terms & Conditions</span> / <span>Privacy Policy</span> / <span>Sitemap</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
