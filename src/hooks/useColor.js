import fondo1 from '../image/fondo1.jpg';
import fondo2 from '../image/fondo2.jpg';
import fondo3 from '../image/fondo3.jpg';
import fondo4 from '../image/fondo4.jpg';

export const useColor = () => {
    let colores = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];

    const imagenes = [fondo1, fondo2, fondo3, fondo4];

    const color = colores[Math.floor(Math.random() * 11)]
    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)];

    return { color, imagen };
};