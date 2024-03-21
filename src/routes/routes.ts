// routes.ts
import express from 'express';
import { checkTriangle, findLongestConcatenatedString, handleJosephusPermutation } from '../controllers';

const router = express.Router();

/**
 * @swagger
 * /api/verificar-triangulo:
 *   post:
 *     summary: (1) Verificar si se puede construir un triángulo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *               c:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Success.
 *       '400':
 *         description: Bad Request.
 */
router.post('/verificar-triangulo', checkTriangle);

/**
 * @swagger
 * /api/cadena-mas-larga:
 *   post:
 *     summary: (2) Encontrar la primera cadena más larga de R cadenas consecutivas.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               variable:
 *                 type: array
 *                 items:
 *                   type: string
 *               k:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Success.
 *       '400':
 *         description: Bad Request.
 */
router.post('/cadena-mas-larga', findLongestConcatenatedString);

/**
 * @swagger
 * /api/permutacion-josephus:
 *   post:
 *     summary: (3) Devuelve una permutación de Josephus.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matriz:
 *                 type: array
 *                 items:
 *                   type: number
 *               k:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Permutación de Josephus generada con éxito.
 *       '400':
 *         description: Error en la solicitud.
 */
router.post('/permutacion-josephus', handleJosephusPermutation);

export default router;
