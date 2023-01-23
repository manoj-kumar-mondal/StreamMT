import express, { Application } from 'express';
import { createServer } from 'http';
import Log from '../libraries/logging';
import router from '../routes';
import { message } from '../constants';
import { config } from './config';

const app: Application = express();

export const startServer = () => {
    const PORT = config.server.port;

    /** request - response checking */
    app.use((req, res, next) => {
        /* logging request to console */
        Log.request(req);

        /* logging response after finish */
        res.on('finish', () => {
            Log.response(req, res);
        });

        next();
    });

    /** some api config */
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    /** api routes */
    app.use('/', router);

    /** for checking the server's health */
    app.get('/ping', (req, res, next) => {
        res.status(200).json({
            message: 'pinging. . .'
        });
    });

    app.use((req, res, next) => {
        let errorMsg = message.error.unknow;
        Log.error(errorMsg);
        return res.status(404).json({
            message: errorMsg
        });
    });

    createServer(app).listen(PORT, () => Log.log(`server is running at http://127.0.0.1:${PORT}`));
};