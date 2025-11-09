import React from "react";
import { FaIdCard, FaFileAlt, FaUsers, FaLandmark } from "react-icons/fa";

const servicesData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661559051049-f9e147c7a90b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    icon: <FaIdCard size={28} color="#007bff" />,
    name: "CAF",
    desc: "Assistenza completa per pratiche fiscali, dichiarazioni e servizi al cittadino.",
  },
  {
    img: "https://media.istockphoto.com/id/2181559386/photo/closeup-of-woman-holding-clipboard-consulting-family.webp?a=1&b=1&s=612x612&w=0&k=20&c=JyRArTZCSZI-FJdn36ghMSbx-Dpqe8Tnxp86Hppx5NQ=",
    icon: <FaFileAlt size={28} color="#007bff" />,
    name: "PATRONATO",
    desc: "Supporto e tutela dei diritti dei lavoratori e cittadini in pratiche previdenziali.",
  },
  {
    img: "https://media.istockphoto.com/id/2202747608/photo/the-boss-is-pointing-in-the-face-at-the-helper-who-misbehaved-in-business-or-legal-matters-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZlqxeH3WnnfkdK42G8itMo-0yZq73u2q82BQV7eKe9U=",
    icon: <FaUsers size={28} color="#007bff" />,
    name: "IMPRESA",
    desc: "Assistenza alle imprese per avvio, gestione e adempimenti burocratici.",
  },
  {
    img: "https://media.istockphoto.com/id/1463456804/photo/lawyer-shaking-hands-with-client-after-deal-making-deal-signing-contract-law-firm-brass-scale.webp?a=1&b=1&s=612x612&w=0&k=20&c=jyA3tDb2yTae5OC-Gpti5Vfi6IpqFNpAMa3Q8H1eBTw=",
    icon: <FaLandmark size={28} color="#007bff" />,
    name: "IMMIGRAZIONE",
    desc: "Guida completa per pratiche di immigrazione, permessi e cittadinanza.",
  },
];

const ServicesSection = () => {
  const styles = {
    section: {
      padding: "80px 20px",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      backgroundColor: "#ebe5e5",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "50px",
      color: "#222",
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      flex: "1 1 calc(25% - 30px)", // 4 cards per row on large screens
      minWidth: "260px", // ensures cards don't shrink too much
      maxWidth: "300px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    img: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
    },
    iconWrapper: {
      position: "absolute",
      top: "10px",
      left: "10px",
      backgroundColor: "#fff",
      padding: "8px",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    },
    serviceName: {
      fontSize: "1.2rem",
      fontWeight: "600",
      margin: "15px 10px 10px 10px",
      color: "#007bff",
    },
    serviceDesc: {
      fontSize: "0.95rem",
      color: "#555",
      margin: "0 10px 15px 10px",
      lineHeight: "1.5",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.section}>
      <h1 style={styles.heading}>I servizi del Caf</h1>

      <div style={styles.cardsContainer}>
        {servicesData.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={{ position: "relative" }}>
              <img src={service.img} alt={service.name} style={styles.img} />
              <div style={styles.iconWrapper}>{service.icon}</div>
            </div>
            <h3 style={styles.serviceName}>{service.name}</h3>
            <p style={styles.serviceDesc}>{service.desc}</p>
          </div>
        ))}
      </div>

      <button style={styles.button}>Vedi tutti i servizi</button>
    </div>
  );
};

export default ServicesSection;
