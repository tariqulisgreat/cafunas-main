import contactImage from "../assets/images/contact-image.jpg"; // replace with your image
import siteLogo from "../assets/images/site-logo.png"; // small site logo

const ContactSection = () => {
  const styles = {
    section: {
      width: "100%",
      padding: "60px 20px",
      backgroundColor: "#f8f9fa",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "1200px",
      width: "100%",
      gap: "40px",
      alignItems: "center",
      justifyContent: "center",
    },
    left: {
      flex: "1 1 300px",
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    contactCircle: {
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
    contactImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    right: {
      flex: "1 1 400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      textAlign: "center",
    },
    logo: {
      width: "120px",
      height: "auto",
      marginBottom: "10px",
    },
    intro: {
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "#007bff",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
      maxWidth: "400px",
    },
    input: {
      padding: "12px 15px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
    textarea: {
      padding: "12px 15px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ccc",
      resize: "vertical",
      boxSizing: "border-box",
    },
    button: {
      padding: "12px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    note: {
      fontSize: "1.1rem",
      fontWeight: "500",
      color: "#333",
    },
  };

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        {/* LEFT SIDE */}
        <div style={styles.left}>
          <div style={styles.contactCircle}>
            <img src={contactImage} alt="Contact" style={styles.contactImage} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>
          <img src={siteLogo} alt="Site Logo" style={styles.logo} />
          <p style={styles.intro}>Contattaci</p>

          <form style={styles.form}>
            <input type="text" placeholder="Nome e Cognome" required style={styles.input} />
            <input type="email" placeholder="Indirizzo mail" required style={styles.input} />
            <input type="tel" placeholder="Telefono" required style={styles.input} />
            <textarea placeholder="Scrivi il messaggio qui" rows="5" required style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Invia</button>
          </form>

          <h1 style={styles.note}>
            Scrivi qui il <br /> tuo messaggio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;