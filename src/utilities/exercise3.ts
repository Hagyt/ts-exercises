
/**
 * Realiza el procedimiento de la conjetura de Ulam con un numero como input
 * @param { number } n  Numero inicial
 */

export const ulamsConjecture = (n: number): number[] => {
    const sequence = [n];

    while (n > 1) {
        
        if (n % 2 === 0) {
            n /= 2;
            console.log(`El numero es par. El resultado de la operacion es: ${n}`);
        } else {
            n = n * 3 + 1;
            console.log(`El numero es impar. El resultado de la operacion es: ${n}`);
        }

        sequence.push(n);
    }

    return sequence;
}