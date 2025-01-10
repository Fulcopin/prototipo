import React from 'react';
import './Header.css';

export default function Header({ numeroDeIntentos, resetearPartida }) {
  return (
    <header>
      <div className="titulo">Juego de Memoria</div>
      <div>Intentos: {numeroDeIntentos}</div>
      <button className="boton-reiniciar" onClick={resetearPartida}>
        Reiniciar
      </button>
    </header>
  );
}