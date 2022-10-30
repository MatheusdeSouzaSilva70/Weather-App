import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <ul className="navbar">
      <li className="nav-item">
        Clima
        <div className="ping"></div>
      </li>
      <li className="nav-item">Alerta</li>
      <li className="nav-item">Mapa</li>
      <li className="nav-item">Satélite</li>
      <li className="nav-item">Notícias</li>
    </ul>
  );
};

export default Header;
