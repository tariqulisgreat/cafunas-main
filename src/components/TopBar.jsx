import React, { useState } from "react";

const TopBar = () => {
  const [language, setLanguage] = useState("IT");

  const switchLanguage = (lang) => {
    setLanguage(lang);
    console.log(`Language switched to: ${lang}`);
    // Add translation logic here
  };

  const styles = {
    topbar: {
      width: "100%",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd",
      padding: "8px 20px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
      overflow: "hidden", // prevent horizontal scroll
    },
    langSwitcher: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "0.95rem",
      fontWeight: "500",
      marginRight: "20px", // move a little left from edge
    },
    langButton: (active) => ({
      cursor: "pointer",
      color: active ? "#007bff" : "#555",
      fontWeight: active ? "bold" : "normal",
      transition: "color 0.3s ease",
    }),
  };

  return (
    <div style={styles.topbar}>
      <div style={styles.langSwitcher}>
        <span
          style={styles.langButton(language === "IT")}
          onClick={() => switchLanguage("IT")}
        >
          IT
        </span>
        |
        <span
          style={styles.langButton(language === "EN")}
          onClick={() => switchLanguage("EN")}
        >
          EN
        </span>
      </div>
    </div>
  );
};

export default TopBar;
