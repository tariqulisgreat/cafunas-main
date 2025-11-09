import React from "react";
import { FaMapPin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

// Replace with any online image link
const largeImg =
  "https://plus.unsplash.com/premium_photo-1661559051049-f9e147c7a90b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1032";

const CallToAction = () => {
  const styles = {
    section: {
      width: "100%",
      padding: "60px 20px",
      backgroundColor: "#ebe5e5",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "700px",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "12px",
    },
    chatBadge: {
      position: "absolute",
      top: "20px",
      right: "20px",
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "20px",
      borderRadius: "50%",
      textAlign: "center",
      fontWeight: "600",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      lineHeight: "1.2",
    },
    grayLine: {
      width: "60px",
      height: "4px",
      backgroundColor: "#ddd",
      margin: "20px 0",
      borderRadius: "2px",
    },
    iconsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
      width: "100%",
    },
    iconText: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "220px",
      textAlign: "center",
      gap: "10px",
    },
    icon: {
      fontSize: "28px",
      color: "#007bff",
    },
    text: {
      fontSize: "1rem",
      color: "#333",
      lineHeight: "1.4",
    },
  };

  return (
    <div style={styles.section}>
      <div style={styles.container}>
        {/* IMAGE + CHAT BADGE */}
        <div style={styles.imageWrapper}>
          <img src={largeImg} alt="CTA visual" style={styles.image} />
          <div style={styles.chatBadge}>
            Insieme dal
            <br />
            <strong>2013</strong>
          </div>
        </div>

        {/* GRAY LINE ABOVE ICONS */}
        <div style={styles.grayLine}></div>

        {/* ICONS SIDE BY SIDE UNDER IMAGE */}
        <div style={styles.iconsWrapper}>
          <div style={styles.iconText}>
            <FaMapPin style={styles.icon} />
            <p style={styles.text}>Apri una sede periferica</p>
          </div>
          <div style={styles.iconText}>
            <FaFolderOpen style={styles.icon} />
            <p style={styles.text}>
              Apri un centro
              <br />
              di raccolta come dipendente
            </p>
          </div>
        </div>

        {/* GRAY LINE BELOW ICONS */}
        <div style={styles.grayLine}></div>
      </div>
    </div>
  );
};

export default CallToAction;
