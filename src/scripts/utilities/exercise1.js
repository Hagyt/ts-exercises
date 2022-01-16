"use strict";
/**
 * Calcula la potencia de un numero `base` elevado a `exponent` sin usar el objeto Math.pow
 * @param { number } base  Base que se quiere elevar que corresponde al primer numero
 * @param { number } exponent  Exponente que corresponde al segundo numero
 * @return { number }   Resultado de la potencia
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = void 0;
const power = (base, exponent) => {
    let counter = 0;
    let result = base;
    while (counter < exponent) {
        result = result * base;
        counter++;
    }
    return result;
};
exports.power = power;
