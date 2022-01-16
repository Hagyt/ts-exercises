
/**
 * Calcula la potencia de un numero `base` elevado a `exponent` sin usar el objeto Math.pow
 * @param { number } base  Base que se quiere elevar que corresponde al primer numero
 * @param { number } exponent  Exponente que corresponde al segundo numero
 * @return { number }   Resultado de la potencia
 */

export const power = (base: number, exponent: number): number => {
    return base ** exponent;
}