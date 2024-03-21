"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const routesPath = path_1.default.resolve(__dirname, '../routes/routes.js');
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API para la aplicación.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    basePath: '/',
    apis: [routesPath],
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
