
/**
 * Suma los numeros de un intervalo dado y resta los extremos del intervalo
 * el primer numero tiene que ser menor al segundo
 * @param { number } a  Primer numero
 * @param { number } b  Segundo numero 
 * 
 */

export const sumAndSubstractInterval = (a: number, b: number): void => {
    if (a < b) {

        let sum: number = 0;
        let counter: number = a;
    
        while (a <= counter && counter <= b) {
            sum += counter;
            counter++;
        }
    
        // Respuestas
        console.log(`La suma del intervalo es: ${sum}`);
        console.log(`La resta de los extremos es ${a - b}`);

    } else {
        // Combinacion de numeros no validos
        console.log('La combianacion de numeros no es valida, el primer numero tiene que ser menor al segundo');
    }
}