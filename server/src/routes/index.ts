import { Router } from 'express';
import { getVideo } from '../controllers';

const router = Router();

router.get('/hello', (req, res) => {
    res.send("Hello World");
});

router.get('/video', getVideo);


export default router;