import shuffle from "lodash.shuffle";

const NUMERO_DE_CARTAS = 20;

export default () => {
  try {
    const cartasBase = Array.from({length: 10}, (_, i) => i + 1);
    
    const cartas = cartasBase.slice(0, NUMERO_DE_CARTAS / 2).flatMap((numero) => {
      const imagePath = `${process.env.PUBLIC_URL}/images/carta${numero}.png`;
      
      return [
        { 
          imagen: imagePath,
          fueAdivinada: false, 
          id: Math.random().toString(36).substr(2, 9)
        },
        { 
          imagen: imagePath,
          fueAdivinada: false,
          id: Math.random().toString(36).substr(2, 9)
        }
      ];
    });

    return shuffle(cartas);
  } catch (error) {
    console.error('Error al construir la baraja:', error);
    return [];
  }
};