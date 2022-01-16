
/**
 * Calcula la factorial de un numero dado como input
 * @param { number } n  Numero que se le quiere calcular la factorial
 */

export const factorial = (n: number): number => {
    
    let counter: number = 1;
    let result: number = 1;

    while (counter <= n) {
        result *= counter;
        counter++;
    }

    return result;
}