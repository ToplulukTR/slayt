import express from 'express';
import bodyParser from 'body-parser';
import initRoutes from './routes';

const server = express();

server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
server.use(bodyParser.text());

// register api and render routes
initRoutes(server);

export default server;
