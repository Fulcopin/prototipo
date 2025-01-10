import React from 'react';
import Carta from './Carta';
import './Tablero.css';

export default function Tablero({ baraja, parejaSeleccionada, seleccionarCarta }) {
  return (
    <div className="tablero">
      {baraja.map((carta, index) => {
        const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
        return (
          <Carta
            key={carta.id}
            imagen={carta.imagen}
            seleccionada={estaSiendoComparada}
            fueAdivinada={carta.fueAdivinada}
            onClick={() => seleccionarCarta(carta)}
          />
        );
      })}
    </div>
  );
}