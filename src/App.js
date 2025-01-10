import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import construirBaraja from './utils/construirBaraja';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baraja: [],
      parejaSeleccionada: [],
      estaComparando: false,
      numeroDeIntentos: 0
    };
  }

  componentDidMount() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.setState({
      baraja: construirBaraja(),
      parejaSeleccionada: [],
      estaComparando: false,
      numeroDeIntentos: 0
    });
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.imagen === segundaCarta.imagen) {
        baraja = baraja.map((carta) => {
          if (carta.imagen === primeraCarta.imagen) {
            return {...carta, fueAdivinada: true};
          }
          return carta;
        });
      }

      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Header 
          numeroDeIntentos={this.state.numeroDeIntentos} 
          resetearPartida={() => this.iniciarJuego()}
        />
        <Tablero 
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
      </div>
    );
  }
}