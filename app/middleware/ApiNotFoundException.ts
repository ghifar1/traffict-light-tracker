import { Request, Response } from "express";

const ApiNotFoundException = (req: Request, res: Response) => {
    return res.status(404).json({
        message: "Api not found"
    })
}

export default ApiNotFoundException