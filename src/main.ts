import express from 'express';
import routes from './routes/routes';
import specs from './core/swagger';
import swaggerUi from 'swagger-ui-express';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Agregar rutas de la API
app.use('/api', routes);

// Agregar documentación de Swagger
app.use('/', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
