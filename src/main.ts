import { power } from './utilities/exercise1';
import { sumAndSubstractInterval } from './utilities/exercise2';
import { ulamsConjecture } from './utilities/exercise3';
import { factorial } from './utilities/exercise4';
import { digits } from './utilities/exercise5';
import { printTriangle } from './utilities/exercise6';
import { digitalRoot } from './utilities/exercise7';

/**
 * Estudiante: David Urrego
 * Descripcion: Ejecuta todos las funciones planteadas en la carpeta utilities
 * 
 */

const main = () => {

    // Ejercicio 1
    console.log('===========================================================');
    console.log('Ejercicio No. 1: ');
    console.log('===========================================================');
    console.log(`La potencia de los numeros introducidos es: ${power(3,1)}`);
    
    // Ejercicion 2
    console.log('===========================================================');
    console.log('Ejercicio No. 2: ');
    console.log('===========================================================');
    sumAndSubstractInterval(5,4);
    
    // Ejercicio 3
    console.log('===========================================================');
    console.log('Ejercicio No. 3: ');
    console.log('===========================================================');
    console.log(`La secuencia obtenida es: ${ulamsConjecture(100)}`);
    
    // Ejercicio 4
    console.log('===========================================================');
    console.log('Ejercicio No. 4: ');
    console.log('===========================================================');
    console.log(`La factorial calculada es: ${factorial(2)}`);
    
    // Ejercicio 5
    console.log('===========================================================');
    console.log('Ejercicio No. 5: ');
    console.log('===========================================================');
    console.log(`La cantidad de digitos es: ${digits(123456789)}`);
    
    console.log('===========================================================');
    console.log('Ejercicio No. 6: ');
    console.log('===========================================================');
    printTriangle(8);

    console.log('===========================================================');
    console.log('Ejercicio No. 7: ');
    console.log('===========================================================');
    console.log(`La raiz digital es: ${digitalRoot(11)}`);
    
}

main();