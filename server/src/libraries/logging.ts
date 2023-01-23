import { Request, Response } from 'express';

export default class {
    template() {

    }

    static request(req: Request) {
        console.log(`[=>] - Request [${new Date().toLocaleString()}] ${req.method}${req.path}`);
    }

    static response(req: Request, res: Response) {
        console.log(`[<=] - Response [${new Date().toLocaleString()}] ${req.method}${req.path} - ${res.statusCode}`);
    }

    static error(err: string) {
        console.log(`[!!] - Error: ${err}`);
    }

    static log(msg: string) {
        console.log(`[:)] - Info: ${msg}`);
    }
}