/**
 * Calcula la cantidad de digitos de un numero que recibe como input
 * @param { number } n  Numero que se le quiere sacar la cantidad de digitos
 */

export const digits = (n: number): number => {

    let digits: number = 0;

    while (n !== 0) {
        n = Math.floor(n/10);
        digits++;
    }

    return digits;
}