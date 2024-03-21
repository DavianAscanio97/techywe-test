import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
const routesPath = path.resolve(__dirname, '../routes/routes.js');
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
const specs = swaggerJsdoc(options);
export default specs;
