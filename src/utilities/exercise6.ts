/**
 * Imprime un triangulo en base al numero dado como input
 * @param { number } n  Numero base
 */

export const printTriangle = (n: number): void => {

    let numberPrint: number = 1;

    while (numberPrint <= n) {
        let counter: number = 0;

        while (counter < numberPrint) {
            process.stdout.write(numberPrint.toString());
            counter++;
        }
        console.log('');
        numberPrint++;
    }
}