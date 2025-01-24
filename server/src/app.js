const express = require('express');
const serverConfig = require('./config/serverConfig.js');
const indexRouter = require('./routes/index.routes.js');

const app = express();
const PORT = process.env.PORT ?? 3000;

// Конфигурация сервера
serverConfig(app)

// Маршрутизация сервера
app.use('/', indexRouter);

// app.use(express.json());


app.listen(PORT, () => console.log(`Server started at ${PORT} port`));