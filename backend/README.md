# Diplomado-proyecto-backend

## Requisitos
- Node.js v16+
- MongoDB
- npm

## Instalación
1. Clonar el repositorio
2. Instalar dependencias:
       npm install
3. Configurar variables de entorno (crear archivo .env):
    MONGODB_URI=mongodb://localhost:27017/nombre-proyecto (si se mantiene el mismo sería Diplomado-proyecto-backend)
    PORT=3000
4. Iniciar MongoDB
5. Ejecutar el servidor:
    npm run dev

## ENDPOINTS:

    - POST /api/usuarios - Crear nuevo usuario
    - GET /api/usuarios - Obtener todos los usuarios

## Estructura del Proyecto

    /backend - Código fuente del backend

        /controllers - Lógica de los controladores

        /models - Modelos de MongoDB

        /routes - Definición de rutas

        /middleware - Middlewares personalizados

        /config - Configuraciones
