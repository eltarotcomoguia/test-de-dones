import fondo1 from '../image/fondo1.jpeg';
import fondo2 from '../image/fondo2.jpeg';
import fondo3 from '../image/fondo3.jpeg';
import fondo4 from '../image/fondo4.jpeg';

export const useColor = () => {
    const colores = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#77B1A9',
        '#73A857'
    ];

    const imagenes = [fondo1, fondo2, fondo3, fondo4];

    const getLuminosity = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        const [R, G, B] = [r, g, b].map((v) =>
            v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
        );

        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };

    const getContrast = (hex1, hex2) => {
        const lum1 = getLuminosity(hex1);
        const lum2 = getLuminosity(hex2);
        return lum1 > lum2
            ? (lum1 + 0.05) / (lum2 + 0.05)
            : (lum2 + 0.05) / (lum1 + 0.05);
    };

    const imagen = imagenes[Math.floor(Math.random() * imagenes.length)];

    let color;
    do {
        color = colores[Math.floor(Math.random() * colores.length)];
    } while (getContrast(color, '#ffffff') < 4.5 && getContrast(color, '#000000') < 4.5);

    return { color, imagen };
};