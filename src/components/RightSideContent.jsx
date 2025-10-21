import React from "react";
import "./RightSideContent.css";
import siteLogo from "../assets/images/site-logo.png"; // replace with your logo path

const RightSideContent = () => {
  return (
    <div className="right-side-content">
      {/* Site Logo */}
      <img src={siteLogo} alt="Site Logo" className="site-logo" />

      {/* Paragraph under logo */}
      <p className="welcome-text">
        Benvenuti in Caf Unsic
      </p>

      {/* Heading 1 */}
      <h1 className="main-heading">
        Caf Unsic sempre<br />accanto a te!
      </h1>

      {/* Heading 2 */}
      <h2 className="sub-heading">
        Abbiamo un'esperienza ultra decennale del mondo Caf che mettiamo a tua disposizione in modo professionale
      </h2>

      {/* Paragraph */}
      <p className="description-text">
        Noi siamo il CAF Unsic. Il nostro compito è esserti vicino nei tuoi adempimenti quotidiani, sia che tu debba richiedere un'agevolazione o prestazione sociale attraverso il modello ISEE, o che debba rispondere agli obblighi dichiarativi per il versamento delle imposte. Lo facciamo attraverso una presenza capillare su tutto il territorio nazionale. Mettiamo a disposizione i nostri strumenti e le nostre competenze al tuo servizio per colmare la distanza tra te e gli Enti. <br /><br />
        Ti garantiamo la sicurezza di una copertura assicurativa in caso di errori. Tuteliamo i tuoi diritti e siamo garanti di legalità nei confronti dello Stato.
      </p>
    </div>
  );
};

export default RightSideContent;
