"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const swagger_1 = __importDefault(require("./core/swagger"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Agregar rutas de la API
app.use('/api', routes_1.default);
// Agregar documentación de Swagger
app.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default, { explorer: true }));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
