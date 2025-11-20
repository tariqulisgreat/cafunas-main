import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const MainMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const styles = {
    mainmenu: {
      width: "100%",
      backgroundColor: "#fff",
      position: isSticky ? "fixed" : "relative",
      top: 0,
      left: 0,
      zIndex: 999,
      boxShadow: isSticky ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s ease",
      fontFamily: "Poppins, sans-serif",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    logoImg: { height: "120px" }, // Logo size
    menu: {
      display: isMobile ? "none" : "flex",
      listStyle: "none",
      gap: "20px",
      flex: "1 1 auto",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      margin: 0,
      padding: 0,
    },
    menuItem: {
      position: "relative",
      cursor: "pointer",
      fontWeight: 500,
      fontSize: "0.95rem",
      padding: "8px 12px",
      borderRadius: "4px",
      transition: "all 0.3s ease",
    },
    link: {
      textDecoration: "none",
      color: "#333",
      display: "block",
      transition: "all 0.3s ease",
    },
    dropdownMenu: {
      position: isMobile ? "static" : "absolute",
      top: isMobile ? "0" : "100%",
      left: 0,
      backgroundColor: "#fff",
      minWidth: "180px",
      boxShadow: isMobile ? "none" : "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "6px",
      overflow: "hidden",
      zIndex: 10,
      display: isMobile ? servicesOpen || marketingOpen ? "block" : "none" : "block",
    },
    dropdownItem: {
      padding: "10px 15px",
      borderBottom: "1px solid #eee",
      fontSize: "0.9rem",
    },
    menuButton: {
      backgroundColor: "#006400", // deep green
      color: "#fff",
      padding: "8px 15px",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: 600,
      textAlign: "center",
      cursor: "pointer",
      flex: "0 0 auto",
      transition: "0.3s",
    },
    menuToggle: {
      display: isMobile ? "flex" : "none",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    mobileMenu: {
      display: menuOpen ? "flex" : "none",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      marginTop: "10px",
      paddingBottom: "10px",
      borderBottom: "1px solid #ddd",
    },
  };

  // Hover functions
  const handleButtonHover = (e) => e.currentTarget.style.backgroundColor = "#32CD32"; // light green
  const handleButtonOut = (e) => e.currentTarget.style.backgroundColor = "#006400"; // deep green

  const handleMenuHover = (e) => e.currentTarget.style.backgroundColor = "#a8e6a1";
  const handleMenuOut = (e) => e.currentTarget.style.backgroundColor = "transparent";

  return (
    <nav style={styles.mainmenu}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/"><img src={logo} alt="Logo" style={styles.logoImg} /></Link>

        {/* Desktop Menu */}
        <ul style={styles.menu}>
          <li style={styles.menuItem} onMouseOver={handleMenuHover} onMouseOut={handleMenuOut}><Link style={styles.link} to="/">Home</Link></li>
          <li style={styles.menuItem} onMouseOver={handleMenuHover} onMouseOut={handleMenuOut}><Link style={styles.link} to="/progetti">I NOSTRI PROGETTI</Link></li>

          <li
            style={styles.menuItem}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span>SERVICES</span>
            {!isMobile && servicesOpen && (
              <ul style={styles.dropdownMenu}>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/caf">CAF</Link></li>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/patronato">PATRONATO</Link></li>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/impresa">IMPRESA</Link></li>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/immigrazione">IMMIGRAZIONE</Link></li>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/unifor">FORMAZIONE</Link></li>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/servizi-vari">SERVIZI VARI</Link></li>
              </ul>
            )}
          </li>

          <li style={styles.menuItem} onMouseOver={handleMenuHover} onMouseOut={handleMenuOut}><Link style={styles.link} to="/eventi">EVENTI</Link></li>

          <li
            style={styles.menuItem}
            onMouseEnter={() => setMarketingOpen(true)}
            onMouseLeave={() => setMarketingOpen(false)}
          >
            <span>MARKETING</span>
            {!isMobile && marketingOpen && (
              <ul style={styles.dropdownMenu}>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/diventa-sede">DIVENTA NOSTRA SEDE</Link></li>
                <li style={styles.dropdownItem}><Link style={styles.link} to="/pubblicita">PUBBLICITA’</Link></li>
              </ul>
            )}
          </li>

          <li style={styles.menuItem} onMouseOver={handleMenuHover} onMouseOut={handleMenuOut}><Link style={styles.link} to="/contact">CONTACT</Link></li>
        </ul>

        {/* Right Button */}
        <a
  href="https://multi-role-dashboard-pdc6.bolt.host/"
  target="_blank"
  rel="noopener noreferrer"
  style={styles.menuButton}
  onMouseOver={handleButtonHover}
  onMouseOut={handleButtonOut}
>
  AREA<br />RISERVATA
</a>

        {/* Mobile Toggle */}
        <div style={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/progetti">I NOSTRI PROGETTI</Link>
          <Link style={styles.link} to="/caf">CAF</Link>
          <Link style={styles.link} to="/patronato">PATRONATO</Link>
          <Link style={styles.link} to="/impresa">IMPRESA</Link>
          <Link style={styles.link} to="/immigrazione">IMMIGRAZIONE</Link>
          <Link style={styles.link} to="/unifor">FORMAZIONE</Link>
          <Link style={styles.link} to="/servizi-vari">SERVIZI VARI</Link>
          <Link style={styles.link} to="/eventi">EVENTI</Link>
          <Link style={styles.link} to="/diventa-sede">DIVENTA NOSTRA SEDE</Link>
          <Link style={styles.link} to="/pubblicita">PUBBLICITA’</Link>
          <Link style={styles.link} to="/contact">CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default MainMenu;
