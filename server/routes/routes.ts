import express, { NextFunction, Response, Request } from "express";
import logic from "../logic/logic";


const router = express.Router();

router.get('/api/Companys', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Companys = await logic.getAllCompanysNames();
        res.json(Companys);
        console.log(Companys);
    } catch (err: any) {
        next(err);
    }
})


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("Hello world!");
    } catch (err: any) {
        next(err);
    }
})

export default router 