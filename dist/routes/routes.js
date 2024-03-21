"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
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
router.post('/verificar-triangulo', controllers_1.checkTriangle);
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
router.post('/cadena-mas-larga', controllers_1.findLongestConcatenatedString);
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
router.post('/permutacion-josephus', controllers_1.handleJosephusPermutation);
exports.default = router;
