import { Request, Response } from 'express';

/**
 * Verifica si se puede construir un triángulo con los lados dados.
 * @param a - Longitud del lado a
 * @param b - Longitud del lado b
 * @param c - Longitud del lado c
 * @returns Verdadero si se puede construir un triángulo, falso en caso contrario
 */
function isTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
}

/**
 * Encuentra la primera cadena más larga de R cadenas consecutivas.
 * @param variable - Array de cadenas
 * @param k - Número de cadenas consecutivas para concatenar
 * @returns La cadena concatenada más larga
 */
function longestConcatenatedString(variable: string[], k: number): string {
    let longestString = '';
    for (let i = 0; i <= variable.length - k; i++) {
        const concatenatedString = variable.slice(i, i + k).join('');
        if (concatenatedString.length > longestString.length) {
            longestString = concatenatedString;
        }
    }
    return longestString;
}

/**
 * Genera una permutación de Josephus.
 * @param array - El array inicial de elementos a permutar.
 * @param k - El número de lugares a contar antes de eliminar un elemento.
 * @returns La permutación de Josephus.
 */
function josephusPermutation(array: number[], k: number): number[] {
    const result: number[] = [];
    let currentIndex = 0;
    // Ajustamos el índice de k para empezar a contar desde 1
    k = k - 1;

    while (array.length > 0) {
        // Calculamos el nuevo índice basado en el valor de k y el tamaño del array actual
        currentIndex = (currentIndex + k) % array.length;
        // Agregamos el elemento actual a la permutación y lo eliminamos del array original
        result.push(array.splice(currentIndex, 1)[0]);
    }

    return result;
}

/**
 * Handler para verificar si se puede construir un triángulo.
 * @param req - Objeto de solicitud.
 * @param res - Objeto de respuesta.
 */
export function checkTriangle(req: Request, res: Response): void {
    const { a, b, c } = req.body;
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        const result = isTriangle(a, b, c);
        res.json({ esTriangulo: result });
    } else {
        res.status(400).json({ error: 'Se requieren tres valores numéricos enteros.' });
    }
}

/**
 * Handler para encontrar la primera cadena más larga de R cadenas consecutivas.
 * @param req - Objeto de solicitud.
 * @param res - Objeto de respuesta.
 */
export function findLongestConcatenatedString(req: Request, res: Response): void {
    const { variable, k } = req.body;
    if (Array.isArray(variable) && typeof k === 'number') {
        const result = longestConcatenatedString(variable, k);
        res.json({ cadenaMasLarga: result });
    } else {
        res.status(400).json({ error: 'Se requiere un array de cadenas y un valor numérico.' });
    }
}

/**
 * Handler para generar una permutación de Josephus.
 * @param req - Objeto de solicitud.
 * @param res - Objeto de respuesta.
 */
export function handleJosephusPermutation(req: Request, res: Response): void {
    const { matriz, k } = req.body;
    if (Array.isArray(matriz) && typeof k === 'number') {
        const result = josephusPermutation(matriz, k);
        res.json({ result });
    } else {
        res.status(400).json({ error: 'Se requiere un array de números y un valor numérico.' });
    }
}
