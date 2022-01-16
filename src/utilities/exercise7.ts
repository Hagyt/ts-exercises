
/**
 * Calcula la raiz digital de un numero dado como input
 * @param { number } n  Numero al cual se le calculara la raiz digital
 */

export const digitalRoot = (n: number): number => {

    if (Math.floor(n/10) !== 0) {
        
        const numbers: number[] = [];
        const stringNumbers: string[] = n.toString().split('');
    
        stringNumbers.forEach(sn => numbers.push(Number.parseInt(sn)));
    
        const sum = numbers.reduce((sum, number) => sum += number, 0);

        return digitalRoot(sum);
    }

    return n
}