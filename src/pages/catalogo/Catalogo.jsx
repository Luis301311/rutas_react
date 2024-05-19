import React from 'react';
import './Catalogo.css';
import DielectricoMiniatura from '../../assets/Dielectrico-miniatura.png';
import CapacitanciaMiniatura from '../../assets/Capacitancia-miniatura.png';
import { useNavigate } from 'react-router-dom';

export function Catalogo() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.open('https://calculadoradecapacitancia.netlify.app/index.html');
  };

  return (
    <div className="body-catalogo">
      <h1 className="body-catalogo-title">Catálogo de Simuladores</h1>
      <div className="catalogo-container">
        <div className="catalogo-item" onClick={handleButtonClick}>
          <img
            src={CapacitanciaMiniatura}
            alt="Capacitancia"
            className="catalogo-image"
          />
          <h2 className="catalogo-title">Capacitancia</h2>
        </div>
        <div className="catalogo-item" onClick={() => navigate('/dielectric')}>
          <img
            src={DielectricoMiniatura}
            alt="Dielectrico"
            className="catalogo-image"
          />
          <h2 className="catalogo-title">Dielectrico</h2>
        </div>
      </div>
    </div>
  );
}
