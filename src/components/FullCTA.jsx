import React from "react";
import { FaMapPin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import siteLogo from "../assets/images/site-logo.png";
import largeImg from "../assets/images/large-side-img.jpg";
import "./FullCTA.css";

const FullCTA = () => {
  return (
    <div className="full-cta-section">
      <div className="full-cta-container">
        {/* LEFT SIDE */}
        <div className="cta-left">
          <div className="cta-image-wrapper">
            <img src={largeImg} alt="CTA visual" className="cta-image" />
            <div className="chat-badge">
              <p>
                Insieme dal<br />
                <strong>2009</strong>
              </p>
            </div>
          </div>

          <div className="gray-line"></div>

          <div className="cta-icons-below">
            <div className="icon-text">
              <FaMapPin className="cta-inline-icon" />
              <p>Apri una sede periferica</p>
            </div>
            <div className="icon-text">
              <FaFolderOpen className="cta-inline-icon" />
              <p>
                Apri un centro<br />
                di raccolta come dipendente
              </p>
            </div>
          </div>

          <div className="gray-line"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cta-right">
          <img src={siteLogo} alt="Site Logo" className="site-logo" />
          <p className="welcome-text">Benvenuti in Caf Unsic</p>
          <h1 className="main-heading">
            Caf Unsic sempre<br />accanto a te!
          </h1>
          <h2 className="sub-heading">
            Abbiamo un'esperienza ultra decennale del mondo Caf che mettiamo a tua
            disposizione in modo professionale
          </h2>
          <p className="description-text">
            Noi siamo il CAF Unsic. Il nostro compito è esserti vicino nei tuoi
            adempimenti quotidiani, sia che tu debba richiedere un'agevolazione o
            prestazione sociale attraverso il modello ISEE, o che debba rispondere
            agli obblighi dichiarativi per il versamento delle imposte. Lo facciamo
            attraverso una presenza capillare su tutto il territorio nazionale.
            Mettiamo a disposizione i nostri strumenti e le nostre competenze al tuo
            servizio per colmare la distanza tra te e gli Enti.
            <br />
            <br />
            Ti garantiamo la sicurezza di una copertura assicurativa in caso di
            errori. Tuteliamo i tuoi diritti e siamo garanti di legalità nei
            confronti dello Stato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullCTA;
