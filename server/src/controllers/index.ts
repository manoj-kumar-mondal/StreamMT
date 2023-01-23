import { Request, Response } from "express";
import { createReadStream } from "fs";

export const getVideo = (req: Request, res: Response) => {
    const stream = createReadStream("../assets/video1.mp4");

    res.status(200).json({
        message: 'video downloading . . .',
        data: stream.read()
    });
};