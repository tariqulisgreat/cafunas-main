import React from "react";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const Contact = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      color: "#333",
      lineHeight: "1.6",
    },
    heroSection: {
      position: "relative",
      textAlign: "center",
      color: "white",
      backgroundImage:
        "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg')", // ✅ reliable hosted image
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "120px 20px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      maxWidth: "800px",
      margin: "0 auto",
    },
    heroTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "1.3rem",
    },
    section: {
      padding: "60px 20px",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "2rem",
      marginBottom: "30px",
      color: "#222",
    },
    contactDetails: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      marginBottom: "50px",
    },
    detailCard: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "280px",
    },
    form: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "6px",
      fontSize: "1rem",
      cursor: "pointer",
    },
    mapSection: {
      marginTop: "60px",
      height: "400px",
      width: "100%",
      border: 0,
    },
  };

  return (
    <div style={styles.container}>
      <MainMenu />

      {/* ✅ Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>CONTATTACI</h1>
          <p style={styles.heroSubtitle}>
            Hai bisogno di aiuto? Compila il form o contattaci direttamente.
          </p>
        </div>
      </section>

      {/* ✅ Contact Info Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Come puoi raggiungerci</h2>
        <div style={styles.contactDetails}>
          <div style={styles.detailCard}>
            <h3>📍 Sede Principale:
</h3>
            <p>Via Quinto Sella 79
36100  Vicenza(VI)
ITALIA</p>
          </div>
          <div style={styles.detailCard}>
            <h3>📞 Telefono</h3>
            <p>+39 350 881 6335</p>
          </div>
          <div style={styles.detailCard}>
            <h3>📧 Email</h3>
            <p>unas.vicenza@gmail.com</p>
          </div>
        </div>

        {/* ✅ Contact Form */}
        <form style={styles.form}>
          <input type="text" placeholder="Nome" style={styles.input} required />
          <input type="email" placeholder="Email" style={styles.input} required />
          <textarea
            placeholder="Messaggio"
            rows="5"
            style={styles.input}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            Invia Messaggio
          </button>
        </form>
      </section>

      {/* ✅ Embedded Google Map Section */}
      <section>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11399.306308223362!2d9.1859241!3d45.4642035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a0d2b2b1df%3A0x1e3f5a0e6b0c99c9!2sMilano%2C%20Italy!5e0!3m2!1sen!2sit!4v1693451234567!5m2!1sen!2sit"
          width="100%"
          height="400"
          style={styles.mapSection}
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
