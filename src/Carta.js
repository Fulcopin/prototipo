import React from 'react';
import './Carta.css';

export default function Card({ imagen, fueAdivinada, seleccionada, onClick }) {
  return (
    <div 
      className={`carta ${fueAdivinada ? 'adivinada' : ''} ${seleccionada ? 'seleccionada' : ''}`} 
      onClick={onClick}
    >
      <div className="carta-inner">
        <div className="carta-front"></div>
        <div className="carta-back">
          <img 
            src={imagen} 
            alt="carta" 
          />
        </div>
      </div>
    </div>
  );
}